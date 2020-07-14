import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/auth/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "forgot",
    loadChildren: () =>
      import("./pages/auth/forgot/forgot.module").then(
        (m) => m.ForgotPageModule
      ),
  },
  {
    path: "done",
    loadChildren: () =>
      import("./pages/auth/done/done.module").then((m) => m.DonePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "setting",
    loadChildren: () =>
      import("./pages/setting/setting/setting.module").then(
        (m) => m.SettingPageModule
      ),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./pages/setting/notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: "privacy",
    loadChildren: () =>
      import("./pages/setting/privacy/privacy.module").then(
        (m) => m.PrivacyPageModule
      ),
  },
  {
    path: "help",
    loadChildren: () =>
      import("./pages/setting/help/help.module").then((m) => m.HelpPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
