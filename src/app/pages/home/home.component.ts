import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { PairingService } from './../../shared/service/pairing-service'
import { DeviceService } from './../../shared/service/device-service'
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
  categories: any;
  constructor(
    private pairingService: PairingService,
    private deviceService: DeviceService,
    public loadingController: LoadingController
  ) {
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
  ionViewWillEnter() {
    this.loadingController
      .create({
        message: "Wait a second...",
      })
      .then((loadingElement) => {
        loadingElement.present();
        var ref = this;
        this.pairingService.getPairings().then((result) => {
          console.log(result);
          this.categories = result;
          this.categories.map((data) => {
            this.loadingController
              .create({
                message: "Wait a second...",
              })
              .then((loadingElement) => {
                loadingElement.present();
                var ref = this;
                this.deviceService.isConnectedDevice(data.deviceId).then((res) => {
                  console.log("deviceId:" + data.deviceId + " connected:" + res);
                  this.deviceService.getDeviceProperty(data.deviceId,"charge_state").then((res) => {
                    console.log("deviceId:" + data.deviceId + " charge_state:" + res);
                    ref.loadingController.dismiss();
                  });
                });
                
              });
          });
          ref.loadingController.dismiss();
        });
      });
  }
  async ngOnInit() {

  }
  ngAfterViewInit() { }
  onChangeEvent(event, id) {
    console.log(event.checked);
    if (event.checked) {
      this.loadingController
        .create({
          message: "Wait a second...",
        })
        .then((loadingElement) => {
          loadingElement.present();
          var ref = this;
          this.deviceService.startCharge(id).then((res) => {
            console.log(res);
            ref.loadingController.dismiss();
          });
        });
    } else {
      this.loadingController
        .create({
          message: "Wait a second...",
        })
        .then((loadingElement) => {
          loadingElement.present();
          var ref = this;
          this.deviceService.pauseCharge(id).then((res) => {
            console.log(res);
            ref.loadingController.dismiss();
          });
        });
    }
  }
}
