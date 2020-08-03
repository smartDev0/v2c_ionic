import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterComponent,
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
  declarations: [RegisterComponent],
})
export class RegisterPageModule {}
