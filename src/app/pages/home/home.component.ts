import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  today;
  constructor() {
    this.today = Date.now();
    console.log(this.today);
  }

  ngOnInit() {}
}
