import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-charger",
  templateUrl: "./charger.component.html",
  styleUrls: ["./charger.component.scss"],
})
export class ChargerComponent implements OnInit {
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    autoplay: false,
    speed: 500,
    spaceBetween: 2,
  };
  constructor() {}

  ngOnInit() {}
}
