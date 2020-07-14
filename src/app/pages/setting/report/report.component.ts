import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
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
}
