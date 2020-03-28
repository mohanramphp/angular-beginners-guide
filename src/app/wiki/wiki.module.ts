import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import {WikiRoutingModule} from './wiki-routing.module';
import { WikiService } from './wiki.service';

@NgModule({
  imports: [
    CommonModule,
    WikiRoutingModule
  ],
  declarations: [WikiComponent],
  providers: [WikiService]
})
export class WikiModule { }