import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../../../shared/service/authentication.service";
import { cpuUsage } from 'process';
@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"],
})
export class SettingComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}
  logout() {
    this.authService.SignOut();
  }
}
