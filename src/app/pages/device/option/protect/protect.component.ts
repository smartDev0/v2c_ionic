import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-protect",
  templateUrl: "./protect.component.html",
  styleUrls: ["./protect.component.scss"],
})
export class ProtectComponent implements OnInit {
  ionRadioValue;
  ionRadioSubValue;
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
  radioOnSubChecked(event) {
    if (event.target.value != "") {
      this.ionRadioValue = "Fotovoltaica";
    }
  }
  radioOnChecked(event) {
    if (event.target.value != "Fotovoltaica") {
      this.ionRadioSubValue = "";
    } else {
      this.ionRadioValue = event.target.value;
    }
  }
}
