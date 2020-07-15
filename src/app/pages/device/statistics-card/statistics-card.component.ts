import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-statistics-card",
  templateUrl: "./statistics-card.component.html",
  styleUrls: ["./statistics-card.component.scss"],
})
export class StatisticsCardComponent implements OnInit {
  segment = 3;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segment = Number(event.detail.value);
  }
}
