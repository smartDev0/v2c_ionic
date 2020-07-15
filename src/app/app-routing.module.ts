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
  {
    path: "report",
    loadChildren: () =>
      import("./pages/setting/report/report.module").then(
        (m) => m.ReportPageModule
      ),
  },
  {
    path: "report-done",
    loadChildren: () =>
      import("./pages/setting/report-done/report-done.module").then(
        (m) => m.ReportDonePageModule
      ),
  },
  {
    path: "charger",
    loadChildren: () =>
      import("./pages/charger/charger/charger.module").then(
        (m) => m.ChargerPageModule
      ),
  },
  {
    path: "network",
    loadChildren: () =>
      import("./pages/charger/network/network.module").then(
        (m) => m.NetworkPageModule
      ),
  },
  {
    path: "network-done",
    loadChildren: () =>
      import("./pages/charger/network-done/network-done.module").then(
        (m) => m.NetworkDonePageModule
      ),
  },
  {
    path: "non-connection",
    loadChildren: () =>
      import("./pages/device/non-connection/non-connection.module").then(
        (m) => m.NonConnectionPageModule
      ),
  },
  {
    path: "option",
    loadChildren: () =>
      import("./pages/device/option/option/option.module").then(
        (m) => m.OptionPageModule
      ),
  },
  {
    path: "share",
    loadChildren: () =>
      import("./pages/device/option/share/share/share.module").then(
        (m) => m.SharePageModule
      ),
  },
  {
    path: "share-done",
    loadChildren: () =>
      import("./pages/device/option/share/share-done/share-done.module").then(
        (m) => m.ShareDonePageModule
      ),
  },
  {
    path: "option-limit",
    loadChildren: () =>
      import("./pages/device/option/option-limit/option-limit.module").then(
        (m) => m.OptionLimitPageModule
      ),
  },
  {
    path: "protect",
    loadChildren: () =>
      import("./pages/device/option/protect/protect.module").then(
        (m) => m.ProtectPageModule
      ),
  },
  {
    path: "remove",
    loadChildren: () =>
      import("./pages/device/option/remove-confirm/remove-confirm.module").then(
        (m) => m.RemoveConfirmPageModule
      ),
  },
  {
    path: "remove-done",
    loadChildren: () =>
      import("./pages/device/option/remove-done/remove-done.module").then(
        (m) => m.RemoveDonePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
