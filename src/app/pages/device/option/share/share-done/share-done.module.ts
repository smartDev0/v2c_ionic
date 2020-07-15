import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ShareDoneComponent } from "./share-done.component";

const routes: Routes = [
  {
    path: "",
    component: ShareDoneComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ShareDoneComponent],
})
export class ShareDonePageModule {}
