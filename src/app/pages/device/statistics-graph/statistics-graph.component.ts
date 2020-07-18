import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-statistics-graph",
  templateUrl: "./statistics-graph.component.html",
  styleUrls: ["./statistics-graph.component.scss"],
})
export class StatisticsGraphComponent implements OnInit {
  today;
  segment = 1;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  @ViewChild("lineCanvasTimer") lineCanvasTimer: ElementRef;
  @ViewChild("lineCanvasEuro") lineCanvasEuro: ElementRef;
  public lineChart: Chart;
  constructor() {
    this.today = Date.now();
  }
  segmentChanged(event) {
    this.segment = Number(event.detail.value);
    this.ngAfterViewInit();
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      new Chart(this.lineCanvas.nativeElement, {
        type: "line",
        data: {
          labels: ["1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6Jun"],
          datasets: [
            {
              label: "",
              fill: true,
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
        options: {
          legend: {
            position: "bottom",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  padding: 20,
                },
                gridLines: {
                  drawTicks: false,
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  zeroLineColor: "transparent",
                  drawTicks: false,
                  display: false,
                },
                ticks: {
                  padding: 20,
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                },
              },
            ],
          },
        },
      });
      new Chart(this.lineCanvasTimer.nativeElement, {
        type: "line",
        data: {
          labels: ["Jan 20", "FEB 20", "MAR 20", "ABR 20", "MAY 20", "JUN 20"],
          datasets: [
            {
              label: "",
              fill: true,
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
              data: [21, 28, 34, 40, 60, 75],
              spanGaps: false,
            },
          ],
        },
        options: {
          legend: {
            position: "bottom",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  padding: 20,
                },
                gridLines: {
                  drawTicks: false,
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  zeroLineColor: "transparent",
                  drawTicks: false,
                  display: false,
                },
                ticks: {
                  padding: 20,
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                },
              },
            ],
          },
        },
      });
      new Chart(this.lineCanvasEuro.nativeElement, {
        type: "line",
        data: {
          labels: ["FEB 20", "MAR 20", "ABR 20", "MAY 20", "JUN 20"],
          datasets: [
            {
              label: "",
              fill: true,
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
              data: [8, 6, 6.5, 6.3, 30, 75],
              spanGaps: false,
            },
          ],
        },
        options: {
          legend: {
            position: "bottom",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  padding: 20,
                },
                gridLines: {
                  drawTicks: false,
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  zeroLineColor: "transparent",
                  drawTicks: false,
                  display: false,
                },
                ticks: {
                  padding: 20,
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                },
              },
            ],
          },
        },
      });
    }, 300);
  }
}
