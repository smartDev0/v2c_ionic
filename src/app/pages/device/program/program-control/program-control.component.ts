import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInput } from "@ionic/angular";

@Component({
  selector: "app-program-control",
  templateUrl: "./program-control.component.html",
  styleUrls: ["./program-control.component.scss"],
})
export class ProgramControlComponent implements OnInit {
  segment = 1;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segment = Number(event);
  }

  moveFocus(event, nextElement) {
    if (event.target.value != "") nextElement.focus();
  }
}
