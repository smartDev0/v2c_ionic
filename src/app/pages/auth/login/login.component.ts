import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthenticationService } from "./../../../shared/service/authentication.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  async ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(["home"]);
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .SignIn(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
        console.log(res);
        if (res.user.emailVerified) {
          this.router.navigate(["home"]);
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
