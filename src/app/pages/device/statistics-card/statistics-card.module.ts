import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { StatisticsCardComponent } from "./statistics-card.component";

const routes: Routes = [
  {
    path: "",
    component: StatisticsCardComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [StatisticsCardComponent],
})
export class StatisticsCardPageModule {}
