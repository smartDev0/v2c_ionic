import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  today;
  constructor() {
    this.today = Date.now();
  }

  ngOnInit() {}
}
