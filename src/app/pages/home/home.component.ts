import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  today;
  maxPowverValue;
  currentPowverVale;
  maxCostValue = 200;
  percentPower: Number;
  currentCostVale = 72.8;
  percentCost: Number;
  constructor() {
    this.today = Date.now();
    this.currentPowverVale = 280;
    this.maxPowverValue = 2000;
    this.percentPower = Math.round(
      (this.currentPowverVale / this.maxPowverValue) * 100
    );
    this.percentCost = Math.round(
      (this.currentCostVale / this.maxCostValue) * 100
    );
  }

  ngOnInit() {}
  ngAfterViewInit() {}
}
