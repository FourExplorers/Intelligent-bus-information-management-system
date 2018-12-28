import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule} from './homepage-routing.module'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"; 
import {MatSidenavModule} from "@angular/material";
import { isNgContainer } from '@angular/compiler';
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatSidenavModule,
  ]
})

export class HomepageModule {
  ngOnInit() {
     const rg = document.getElementById('hide');
     if(localStorage.getItem('belongclass')=='citizen'||localStorage.getItem('belongclass')=='driver')
     {
      rg.style.display = 'none';
     }
  }
 }
