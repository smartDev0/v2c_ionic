import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class StadisticsService {
  constructor(
    public http: HttpClient,
  ) {}

  getHometSatistics() {
    return this.http.get(
      environment.v2cServiceConfig.basePath + "/api/v1/stadistic/me"
    );
  }

  getDeviceSatistics(id) {
    return this.http.get(
      environment.v2cServiceConfig.basePath + "/api/v1/stadistic/device/" + id);
  }
}
