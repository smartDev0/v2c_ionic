import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpConfigInterceptor } from "./shared/service/interceptor.service";
import { AuthenticationService } from "./shared/service/authentication.service";
import { PairingService } from "./shared/service/pairing-service";
import { StadisticsService } from "./shared/service/stadistics.service";

import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticationService,
    PairingService,
    StadisticsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    Geolocation,
    NativeGeocoder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEs, "es");
  }
}
