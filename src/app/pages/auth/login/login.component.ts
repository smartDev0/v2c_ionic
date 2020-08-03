import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./../../../shared/service/authentication.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}
  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        console.log(res);
        if (res.user.emailVerified) {
          this.router.navigate(["done"]);
        } else {
          window.alert("Email is not verified");
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
