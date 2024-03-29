import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ReportDoneComponent } from "./report-done.component";

const routes: Routes = [
  {
    path: "",
    component: ReportDoneComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ReportDoneComponent],
})
export class ReportDonePageModule {}
