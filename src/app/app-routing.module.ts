import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UsersComponent } from "./users/users.component";

// /users/1/address/1?greet=Hello
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
    path: "users/:userId/address/:addressId",
    component: UsersComponent
  },
  {
    path: "",
    redirectTo: "/wiki",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
