import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-connection",
  templateUrl: "./connection.component.html",
  styleUrls: ["./connection.component.scss"],
})
export class ConnectionComponent implements OnInit {
  public ampeaValue = 20;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {}
  onChangeAmpea(event) {
    this.ampeaValue = event.target.value;
  }
}
