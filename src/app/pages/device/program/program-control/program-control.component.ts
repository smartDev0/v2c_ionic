import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInput } from "@ionic/angular";

@Component({
  selector: "app-program-control",
  templateUrl: "./program-control.component.html",
  styleUrls: ["./program-control.component.scss"],
})
export class ProgramControlComponent implements OnInit {
  segment = 1;
  // @ViewChild("num1", { static: false }) num1Ref: any;
  // @ViewChild("num2", { static: false }) num2Ref: any;
  // @ViewChild("num3", { static: false }) num3Ref: any;
  // @ViewChild("num4", { static: false }) num4Ref: any;

  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segment = Number(event);
  }

  moveFocus(event, nextElement) {
    if (event.target.value != "") nextElement.focus();
  }
}
