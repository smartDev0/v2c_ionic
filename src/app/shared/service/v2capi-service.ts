import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import {xah_obj_to_map} from './utils';

@Injectable({
  providedIn: 'root'
})
export class V2CService {

  constructor(private http: HttpClient) { }

  getDeviceProperty(id,property: string): Promise<string>{
    return new Promise(resolve => {
      this.syncDevice(id).then((data) => {
        console.log("Get property: "+ property);
        var mapObj : Map<string, string> = xah_obj_to_map(data);
        var value:string;
        value = mapObj.get(property);
        resolve(value.toString());
      });
    });
  }

  async setDeviceProperty(id:string ,property: string, value: string){
      return new Promise(resolve => { 
        var params = new HttpParams().set("value",value);
        this.http.post(environment.v2cServiceConfig.basePath + "/api/v1/device/"+ id +"/" + property,params,{responseType:'text'})
        .subscribe((data : string) =>{
          resolve(true);
        },(error) =>{
          console.log(error);
          resolve(false);
        });
       });
  }

  async syncDevice(id: string){
    return new Promise(resolve => { 
      this.http.get(environment.v2cServiceConfig.basePath + "/api/v1/device/"+ id +"/reported")
      .subscribe((data : any) =>{ data;
        resolve(data)
      },(error) =>{
        throw error
      });
     });
  }

  async startCharge(id: string) {
    this.http
      .post(
        environment.v2cServiceConfig.basePath +
          "/api/v1/device/" +
          id +
          "/startcharge", {}
      )
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  async pauseCharge(id: string) {
    this.http
      .post(
        environment.v2cServiceConfig.basePath +
          "/api/v1/device/" +
          id +
          "/pausecharge",
        {}
      )
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
