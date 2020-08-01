import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-statistics-card",
  templateUrl: "./statistics-card.component.html",
  styleUrls: ["./statistics-card.component.scss"],
})
export class StatisticsCardComponent implements OnInit {
  segment = 3;
  public ampeaValue = 20;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segment = Number(event.detail.value);
  }
  onChangeAmpea(event) {
    this.ampeaValue = event.target.value;
  }
}
