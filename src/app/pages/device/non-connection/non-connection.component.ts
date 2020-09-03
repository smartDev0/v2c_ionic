import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { StadisticsService } from "./../../../shared/service/stadistics.service";
@Component({
  selector: "app-non-connection",
  templateUrl: "./non-connection.component.html",
  styleUrls: ["./non-connection.component.scss"],
})
export class NonConnectionComponent implements OnInit {
  color: string;
  number: number;
  statisticsData: any;
  deviceId: string;
  constructor(
    private route: ActivatedRoute,
    private stadisticsService: StadisticsService
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.deviceId = params.deviceId;
      this.stadisticsService.getDeviceSatistics(params.deviceId).subscribe(res => {
        console.log(res);
        this.statisticsData = res;
      })
    });
  }

  ngOnInit() {}
  segmentChanged(event) {}
  onRangeChangeHandler() {
  }
  ngAfterViewInit() {}
}
