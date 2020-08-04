import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PairingService } from "./../../../shared/service/pairing-service";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthenticationService } from "src/app/shared/service/authentication.service";
@Component({
  selector: "app-charger",
  templateUrl: "./charger.component.html",
  styleUrls: ["./charger.component.scss"],
})
export class ChargerComponent implements OnInit {
  public isActiveOne = false;
  public isActiveTwo = false;
  public isActiveThree = false;
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    autoplay: false,
    speed: 500,
    spaceBetween: 2,
  };
  addForm: FormGroup;
  submitted = false;
  constructor(
    public viewCtrl: ModalController,
    public pairingService: PairingService,
    private toastCtrl: ToastController,
    public authService: AuthenticationService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      deviceId: ["", Validators.required],
      tag: [""],
    });
  }
  get f() {
    return this.addForm.controls;
  }
  ngOnInit() {}
  onChangeStats(event) {
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
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    this.pairingService
      .createPairing(this.addForm.value.deviceId, this.addForm.value.tag)
      .then(async (result) => {
        if (result) {
          let toast = await this.toastCtrl.create({
            message: "Pairing successfull",
            duration: 2000,
            position: "bottom",
            mode: "ios",
            color: "dark",
          });
          toast.present();
          this.submitted = false;
        } else {
          let toast = await this.toastCtrl.create({
            message: "Pairing error!!",
            duration: 2000,
            position: "bottom",
            mode: "ios",
            color: "dark",
          });
          toast.present();
          this.submitted = false;
        }
      });
  }
}
