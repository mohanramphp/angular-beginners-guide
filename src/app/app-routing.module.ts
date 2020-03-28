import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "wiki",
    loadChildren: () => import("./wiki/wiki.module").then(mod => mod.WikiModule)
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent
  },
  {
    path: "",
    redirectTo: "/wiki",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/page-not-found",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
