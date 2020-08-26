import { Injectable } from '@angular/core';

const V2C_SERVICE = '5000';
const V2C_GETS_CHARACTERISTIC = '5001';
const V2C_SETS_CHARACTERISTIC = '5002';

const DYNAMIC_KW = "dynamic";
const MAX_CAR_INTENSITY_KW = "max_car_int";
const MIN_CAR_INTENSITY_KW = "min_car_int";
const INTENSITY_KW = "intensity";
const CHARGE_STATUS_KW = "charge_state";
const LOCKED_KW = "locked";;
const WIFISTATUS_KW = 'wifistatus';
const LANGUAGE_KW = "language";
const INSTALL_KW = "inst_type";
const PROGRAM_KW = "programed";
const TIMESTART_KW = "time_start";
const TIMEEND_KW = "time_end";
const DAYSOFWEEK_KW = "daysofweek";
const HOURSTART_KW = "hourstart";
const HOUREND_KW = "hourend";
const MINUTESTART_KW = "minutestart";
const MINUTEEND_KW = "minuteend";


@Injectable({
  providedIn: 'root'
})
export class BleDeviceService {

  peripheral: any = {};

  constructor() { }

  async getDeviceProperty(id:string,property: string){
    return new Promise(resolve => {
        resolve("UNINPLEMENTED");
      });
  }

  async setDeviceProperty(id:string,property: string, value: string){
    return new Promise(resolve => {
      resolve("UNINPLEMENTED");
    });
  }

  async startCharge(id: string) {
    return new Promise(resolve => {
      resolve("UNINPLEMENTED");
    });
  }
  async pauseCharge(id: string) {
    return new Promise(resolve => {
      resolve("UNINPLEMENTED");
    });
  }

  async syncDevice(id:string,page:number){
    return new Promise(resolve => {
      resolve("UNINPLEMENTED");
    });
  }
}
