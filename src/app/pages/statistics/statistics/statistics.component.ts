import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  today;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  public lineChart: Chart;
  constructor() {
    this.today = Date.now();
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6Jun"],
        //   datasets: [
        //     {
        //       label: "",
        //       fill: false,
        //       lineTension: 0.1,
        //       backgroundColor: "#fffcfc",
        //       borderColor: "grey",
        //       // borderCapStyle: "butt",
        //       borderDash: [],
        //       borderDashOffset: 0.0,
        //       borderJoinStyle: "miter",
        //       pointBorderColor: "red",
        //       pointBackgroundColor: "#fa394e",
        //       pointBorderWidth: 1,
        //       pointHoverRadius: 1,
        //       pointHoverBackgroundColor: "red",
        //       pointHoverBorderColor: "rgba(220,220,220,1)",
        //       pointHoverBorderWidth: 1,
        //       pointRadius: 1,
        //       pointHitRadius: 1,
        //       data: [53, 40, 52, 60, 50, 20],
        //       spanGaps: false,
        //     },
        //   ],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#fffcfc",
            borderColor: "#f1f1f1",
            borderCapStyle: "square",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "red",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "red",
            pointHoverBorderColor: "#fffcfc",
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [53, 40, 52, 60, 50, 20],
            spanGaps: false,
          },
        ],
      },
    });
  }
}
