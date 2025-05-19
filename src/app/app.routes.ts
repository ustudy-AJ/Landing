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
        path: "charts",
        loadComponent: ()=> import("./components/charts/charts.component")
      },
    ]
  }
];
