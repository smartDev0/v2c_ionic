import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HomeComponent } from "./home.component";
import { NgCircleProgressModule } from "ng-circle-progress";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 40,
      outerStrokeWidth: 8,
      // innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ],
  declarations: [HomeComponent],
  exports: [],
})
export class HomePageModule {}
