import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInput } from "@ionic/angular";

@Component({
  selector: "app-program-control",
  templateUrl: "./program-control.component.html",
  styleUrls: ["./program-control.component.scss"],
})
export class ProgramControlComponent implements OnInit {
  segment = 1;
  public isLActive = false;
  public isMActive = false;
  public isXActive = false;
  public isJActive = false;
  public isVActive = false;
  public isSActive = false;
  public isDActive = false;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segment = Number(event);
    this.isLActive = false;
    this.isMActive = false;
    this.isXActive = false;
    this.isJActive = false;
    this.isVActive = false;
    this.isSActive = false;
    this.isDActive = false;
  }

  moveFocus(event, nextElement) {
    if (event.target.value != "") nextElement.focus();
  }
  onChangeSelect(event) {
    switch (event) {
      case "L":
        this.isLActive = !this.isLActive;
        break;
      case "M":
        this.isMActive = !this.isMActive;
        break;
      case "X":
        this.isXActive = !this.isXActive;
        break;
      case "J":
        this.isJActive = !this.isJActive;
        break;
      case "V":
        this.isVActive = !this.isVActive;
        break;
      case "S":
        this.isSActive = !this.isSActive;
        break;
      case "D":
        this.isDActive = !this.isDActive;
        break;
    }
  }
}
