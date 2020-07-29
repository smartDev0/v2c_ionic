import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  today;
  segment = 1;
  public euroActive: boolean = false;
  public electricActive: boolean = true;
  public timeActive: boolean = false;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  @ViewChild("lineCanvasTimer") lineCanvasTimer: ElementRef;
  @ViewChild("lineCanvasEuro") lineCanvasEuro: ElementRef;
  public lineChart: Chart;
  constructor() {
    this.today = Date.now();
  }
  segmentChanged(event) {
    this.segment = Number(event.detail.value);
    if (this.segment == 1) {
      this.electricActive = true;
      this.euroActive = false;
      this.timeActive = false;
    } else if (this.segment == 2) {
      this.timeActive = true;
      this.euroActive = false;
      this.electricActive = false;
    } else {
      this.euroActive = true;
      this.electricActive = false;
      this.timeActive = false;
    }
    this.ngAfterViewInit();
  }
  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      new Chart(this.lineCanvas.nativeElement, {
        type: "line",
        data: {
          labels: ["1 Ener", "2 Ener", "3 Ener", "4 Ener", "5 Ener", "6 Ener"],
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
              spanGaps: true,
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
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
                  // min: 0,
                  // max: 100,
                  // stepSize: 1,
                  callback: function (value) {
                    if (value === 0) {
                      return "0 kwh";
                    } else if (value === 10) {
                      return "10 kwh";
                    } else if (value === 20) {
                      return "20 kwh";
                    } else if (value === 30) {
                      return "30 kwh";
                    } else if (value === 40) {
                      return "40 kwh";
                    } else if (value === 50) {
                      return "50 kwh";
                    } else if (value === 60) {
                      return "60 kwh";
                    } else if (value === 70) {
                      return "70 kwh";
                    } else {
                      return "";
                    }
                  },
                },

                gridLines: {
                  drawTicks: false,
                  display: false,
                },
                // scaleLabel: {
                //   display: true,
                //   labelString: "Power( kwh )",
                // },
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
          labels: [
            "Ener 20",
            "Febr 20",
            "Marz 20",
            "Abri 20",
            "Mayo 20",
            "Juni 20",
          ],
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
            display: false,
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
                  callback: function (value) {
                    if (value === 0) {
                      return "0h";
                    } else if (value === 10) {
                      return "10h";
                    } else if (value === 20) {
                      return "20h";
                    } else if (value === 30) {
                      return "30h";
                    } else if (value === 40) {
                      return "40h";
                    } else if (value === 50) {
                      return "50h";
                    } else if (value === 60) {
                      return "60h";
                    } else if (value === 70) {
                      return "70h";
                    } else if (value === 80) {
                      return "80h";
                    } else if (value === 90) {
                      return "90h";
                    } else if (value === 100) {
                      return "100h";
                    } else {
                      return "";
                    }
                  },
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
          labels: ["Febr 20", "Marz 20", "Abri 20", "Mayo 20", "Juni 20"],
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
            display: false,
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
                  callback: function (value) {
                    if (value === 0) {
                      return "0€";
                    } else if (value === 10) {
                      return "10€";
                    } else if (value === 20) {
                      return "20€";
                    } else if (value === 30) {
                      return "30€";
                    } else if (value === 40) {
                      return "40€";
                    } else if (value === 50) {
                      return "50€";
                    } else if (value === 60) {
                      return "60€";
                    } else if (value === 70) {
                      return "70€";
                    } else if (value === 80) {
                      return "80€";
                    } else if (value === 90) {
                      return "90€";
                    } else if (value === 100) {
                      return "100€";
                    } else {
                      return "";
                    }
                  },
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
