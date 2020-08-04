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

  async getPairings() {
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

  async createPairing(deviceid: string, tag: string) {
    return new Promise((resolve) => {
      var params = new HttpParams().set("deviceId", deviceid).set("tag", tag);
      this.http
        .post(
          environment.v2cServiceConfig.basePath + "/api/v1/pairings/",
          params
        )
        .subscribe(
          (data: any) => {
            resolve(true);
          },
          (error) => {
            console.log(error);
            resolve(false);
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
