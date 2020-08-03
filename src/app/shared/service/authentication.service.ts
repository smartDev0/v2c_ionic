import { Injectable, NgZone } from "@angular/core";
import { auth } from "firebase/app";
import { User } from "../model/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  userData: any;
  credential: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public http: HttpClient
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.ngFireAuth.updateCurrentUser(user).then(() => {
          this.userData = user;
          localStorage.setItem("user", JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem("user"));
          this.getV2CToken();
        });
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  getV2CToken(): Promise<string> {
    return new Promise((resolve) => {
      var oauth = "Basic " + environment.v2cServiceConfig.basicOAuth;
      const header = new HttpHeaders().set("Authorization", oauth);
      const requestOptions = { headers: header };
      const user = JSON.parse(localStorage.getItem("user"));
      var tokenFirebase = user.stsTokenManager.accessToken;
      var params = new HttpParams()
        .set("grant_type", "firebase")
        .set("firebase_token_id", tokenFirebase);
      this.http
        .post(
          environment.v2cServiceConfig.basePath + "/oauth/token",
          params,
          requestOptions
        )
        .subscribe(
          (data: any) => {
            //console.log(data.access_token);
            resolve(data.access_token);
          },
          (error) => {
            console.log(error);
            resolve("");
          }
        );
    });
  }

  async getRequestOptions() {
    var token = await this.getV2CToken();
    var oauth = "Bearer " + token;
    const header = new HttpHeaders().set("Authorization", oauth);
    return { headers: header };
  }

  // Login in with email/password
  SignIn(email, password) {
    this.ngFireAuth.setPersistence("local");
    var a = this.ngFireAuth.signInWithEmailAndPassword(email, password);
    console.log(a);
    return a;
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser
      .then((u) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(["done"]);
      });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          "Password reset email has been sent, please check your inbox."
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.emailVerified !== false ? true : false;
  }

  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["home"]);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["login"]);
    });
  }
}
