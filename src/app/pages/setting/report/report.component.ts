import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  public isActiveOne = false;
  public isActiveTwo = false;
  public isActiveThree = false;
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 2.5,
    loop: true,
    centeredSlides: true,
    autoplay: false,
    speed: 500,
    spaceBetween: 2,
  };
  constructor() {}

  ngOnInit() {}
  onChangeStats(event) {
    console.log(event);
    if (event == 1) {
      this.isActiveOne = !this.isActiveOne;
      this.isActiveTwo = false;
      this.isActiveThree = false;
    } else if (event == 2) {
      this.isActiveOne = false;
      this.isActiveTwo = !this.isActiveTwo;
      this.isActiveThree = false;
    } else if (event == 3) {
      this.isActiveThree = !this.isActiveThree;
      this.isActiveOne = false;
      this.isActiveTwo = false;
    }
  }
}
