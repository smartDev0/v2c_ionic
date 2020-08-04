import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInput } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-program-control",
  templateUrl: "./program-control.component.html",
  styleUrls: ["./program-control.component.scss"],
})
export class ProgramControlComponent implements OnInit {
  public ampeaValue = 20;
  segment = 1;
  public isLActive = false;
  public isMActive = false;
  public isXActive = false;
  public isJActive = false;
  public isVActive = false;
  public isSActive = false;
  public isDActive = false;
  timerForm = new FormGroup({
    stepOne: new FormControl("", [Validators.min(0), Validators.max(9)]),
    stepTwo: new FormControl(""),
    stepThree: new FormControl(""),
    stepFour: new FormControl(""),
  });
  constructor() {}

  ngOnInit() {}
  onChangeAmpea(event) {
    this.ampeaValue = event.target.value;
  }
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
    if (event.target.value < 10) {
    } else {
      return 0;
    }
    if (event.target.value != "") nextElement.focus();
  }
  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      return 0;
    }
  }
  onInputLast(event) {
    let newValue = event.target.value;

    let regExp = new RegExp("^[A-Za-z0-9? ]+$");

    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
      console.log(event.target.value);
    }
  }
  onValidation(event) {
    if (event.target.value > 10) {
      this.timerForm.controls["stepOne"].setValue(
        event.target.value.slice(0, 1)
      );
      return false;
    }
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
