import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { UsersComponent } from './users/users.component';

// NgModule is a decorator which helps angular to understand better about this class AppModule
@NgModule({ 
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, PageNotFoundComponent, UsersComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
