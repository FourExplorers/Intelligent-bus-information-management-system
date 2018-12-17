import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule} from './homepage-routing.module'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"; 
import {MatSidenavModule} from "@angular/material";
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatSidenavModule,
  ]
})
export class HomepageModule { }
