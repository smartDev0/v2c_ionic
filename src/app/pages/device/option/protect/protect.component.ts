import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-protect",
  templateUrl: "./protect.component.html",
  styleUrls: ["./protect.component.scss"],
})
export class ProtectComponent implements OnInit {
  public isActive = false;
  constructor() {}

  ngOnInit() {}
  onChnageToggle(event) {
    if (event.detail.checked) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
