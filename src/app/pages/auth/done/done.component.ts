import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./../../../shared/service/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-done",
  templateUrl: "./done.component.html",
  styleUrls: ["./done.component.scss"],
})
export class DoneComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}
}
