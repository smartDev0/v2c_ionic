import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root",
})
export class PairingService {
  constructor(
    public http: HttpClient,
    public authService: AuthenticationService
  ) {}

  getPairings() {
    return new Promise((resolve) => {
      this.http
        .get(environment.v2cServiceConfig.basePath + "/api/v1/pairings/me")
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            console.log(error);
            resolve(null);
          }
        );
    });
  }

  async updatePairing(id: number, tag: string) {
    var params = new HttpParams().set("tag", tag);
    this.http
      .post(
        environment.v2cServiceConfig.basePath +
          "/api/v1/pairings/" +
          id +
          "/tag/",
        params
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

  async createPairing(deviceid, tag, model, latitude, longitude) {
    const price = 0.1147;
    return new Promise((resolve) => {
      // var params = new HttpParams()
      //   .set("deviceId", deviceid)
      //   .set("latitude", latitude)
      //   .set("longitude", longitude)
      //   .set("master", true)
      //   .set("model", model)
      //   .set("tag", tag);
      const params = {
        deviceId: deviceid,
        latitude: latitude,
        longitude: longitude,
        isMaster: true,
        model: model,
        price: price,
        tag: tag,
      };
      this.http
        .post(
          environment.v2cServiceConfig.basePath + "/api/v1/pairings/",
          params
        )
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            // console.log(error);
            resolve(error);
          }
        );
    });
  }

  async deletePairing(id: number) {
    this.http
      .delete(environment.v2cServiceConfig.basePath + "/api/v1/pairings/" + id)
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
