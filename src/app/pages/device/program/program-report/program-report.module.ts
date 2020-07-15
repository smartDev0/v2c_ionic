import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ProgramReportComponent } from "./program-report.component";

const routes: Routes = [
  {
    path: "",
    component: ProgramReportComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProgramReportComponent],
})
export class ProgramReportPageModule {}
