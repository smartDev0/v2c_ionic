import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RemoveConfirmComponent } from "./remove-confirm.component";

const routes: Routes = [
  {
    path: "",
    component: RemoveConfirmComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RemoveConfirmComponent],
})
export class RemoveConfirmPageModule {}
