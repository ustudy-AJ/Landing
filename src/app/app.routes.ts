import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "",
    children: [
      {
        path: "login",
        loadComponent: ()=> import("./components/login/login.component")
      },
      {
        path: "statistic",
        loadComponent: ()=> import("./components/statistic/statistic.component")
      },
      {
        path: "statistic2",
        loadComponent: ()=> import("./components/statistic-2/statistic-2.component")
      },
      {
        path: "charts",
        loadComponent: ()=> import("./components/charts/charts.component")
      },
    ]
  }
];
