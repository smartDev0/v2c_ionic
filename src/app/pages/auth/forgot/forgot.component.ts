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
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;

  submitted = false;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.forgotForm = this.fb.group({
      email: ["", Validators.email],
    });
  }
  get f() {
    return this.forgotForm.controls;
  }
  ngOnInit() {}
  onSubmit() {
    this.submitted = true;
    console.log(this.forgotForm);
    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      return;
    }
    this.authService.PasswordRecover(this.forgotForm.value.email);
    // this.forgotForm.controls["email"].setValue("");
  }
}
