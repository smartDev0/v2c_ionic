import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-non-connection",
  templateUrl: "./non-connection.component.html",
  styleUrls: ["./non-connection.component.scss"],
})
export class NonConnectionComponent implements OnInit {
  color: string;
  number: number;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {}
  onRangeChangeHandler() {
    // if (this.number > 0 && this.number < 26) {
    //   this.color = "dark";
    // } else if (this.number > 25 && this.number < 51) {
    //   this.color = "primary";
    // } else if (this.number > 50 && this.number < 76) {
    //   this.color = "secondary";
    // } else {
    //   this.color = "danger";
    // }
  }
  ngAfterViewInit() {}
}
