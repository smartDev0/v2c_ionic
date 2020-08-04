import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { ChargerComponent } from "./charger.component";

const routes: Routes = [
  {
    path: "",
    component: ChargerComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [ChargerComponent],
})
export class ChargerPageModule {}
