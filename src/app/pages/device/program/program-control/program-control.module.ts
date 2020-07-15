import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ProgramControlComponent } from "./program-control.component";

const routes: Routes = [
  {
    path: "",
    component: ProgramControlComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProgramControlComponent],
})
export class ProgramControlPageModule {}
