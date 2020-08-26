import { Injectable } from '@angular/core';
import { V2CService } from "./v2capi-service";
import { BleDeviceService } from "./bledevice-service";
import { AuthenticationService } from "./authentication.service";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  connected: boolean = false;

  constructor(private http: HttpClient,
              private authService: AuthenticationService,
              private v2cService : V2CService,
              private bleDeviceService: BleDeviceService) { }


   async getDeviceProperty(id:string, property: string){
    if(await this.isConnectedDevice(id)){
      try {
        return await this.v2cService.getDeviceProperty(id,property);  
      } catch (error) {
        this.connected = false;
        return  this.bleDeviceService.getDeviceProperty(id,property);
      }
    }
    return this.bleDeviceService.getDeviceProperty(id,property);
  }

  async setDeviceProperty(id:string,property: string, value: string){
    if(await this.isConnectedDevice(id)){
      try {
        return this.v2cService.setDeviceProperty(id,property,value);  
      } catch (error) {
        this.connected = false;
        return this.bleDeviceService.setDeviceProperty(id,property,value);
      }
    }
    return this.bleDeviceService.getDeviceProperty(id,property);
  }

  async isConnectedDevice(id: string){
    return new Promise(resolve => { 
      this.http.get(environment.v2cServiceConfig.basePath + "/api/v1/device/"+ id +"/connected")
      .subscribe(() =>{
        resolve(true);
      },(error) =>{
        console.log(error);
        resolve(false);
      });
     });
  }

  async startCharge(id: string) {
    if(await this.isConnectedDevice(id)){
      try {
        return this.v2cService.startCharge(id);  
      } catch (error) {
        this.connected = false;
        return this.bleDeviceService.startCharge(id);
      }
    }
    return this.bleDeviceService.startCharge(id);
  }

  async pauseCharge(id: string) {
    if(await this.isConnectedDevice(id)){
      try {
        return this.v2cService.pauseCharge(id);  
      } catch (error) {
        this.connected = false;
        return this.bleDeviceService.pauseCharge(id);
      }
    }
    return this.bleDeviceService.pauseCharge(id);
  }

  async syncDevice(id:string, page: number){
    if(await this.isConnectedDevice(id)){
      return this.v2cService.syncDevice(id);
    }else{
      return this.bleDeviceService.syncDevice(id,page);
    }
  }

}
