import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RemoveDoneComponent } from "./remove-done.component";

const routes: Routes = [
  {
    path: "",
    component: RemoveDoneComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RemoveDoneComponent],
})
export class RemoveDonePageModule {}
