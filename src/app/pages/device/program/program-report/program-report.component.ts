import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-program-report",
  templateUrl: "./program-report.component.html",
  styleUrls: ["./program-report.component.scss"],
})
export class ProgramReportComponent implements OnInit {
  public TimerCardOne = true;
  public TimerCardTwo = true;
  constructor() {}
  ngOnInit() {}
  onClickTimerCardRemove(id) {
    console.log(id);
    if (id == "1") {
      this.TimerCardOne = false;
    }
    if (id == "2") {
      this.TimerCardTwo = false;
    }
  }
}
