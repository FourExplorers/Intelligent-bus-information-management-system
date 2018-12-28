import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { MainComponent } from './first/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { InitComponent } from './first/init/init.component';
import { ApiService } from './service/api.service';
import { CoreModule } from './core/core.module';
import { NavbarComponent} from './navbar/navbar.component'
import { HomepageModule } from './homepage/homepage.module';
import { FormsModule} from '@angular/forms';
import { SearchNavBarComponent } from './people/search-nav-bar/search-nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component'
import { DsearchComponent } from './people/driver/dsearch/dsearch.component';
import { MdsearchComponent} from './people/manager/mdsearch/mdsearch.component';
import {SubmitService}  from './service/submit.service';
import {SubmitLineService} from './service/submit-line.service';
import { BosschangeComponent } from './people/boss/bosschange/bosschange.component';
import { BossnavbarComponent } from './people/boss/bossnavbar/bossnavbar.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SearchComponent} from './people/citizen/search/search.component'
import { SearchMapComponent } from './people/citizen/search-map/search-map.component'
import { AgmCoreModule } from '@agm/core';
import { MsearchnavbarComponent } from './people/msearchnavbar/msearchnavbar.component';
import { MhsearchComponent } from './people/manager/mhsearch/mhsearch.component';
import {HistoryService} from './service/history.service';
import { MfindsubComponent } from './people/manager/mfindsub/mfindsub.component';
import {MsubsubComponent }from './people/manager/msubsub/msubsub.component'
import {DriverService } from './service/driver.service'
import { PopupService } from './service/popup.service'
import { ToastComponent } from './toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { ProposalsModule } from './people/boss/proposals.module';
import { MsublineComponent } from './people/manager/msubline/msubline.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InitComponent,
    NavbarComponent,
    RegisterComponent,
    ErrorComponent,
    DsearchComponent,
    BossnavbarComponent,
    MdsearchComponent,
    BosschangeComponent,
    SearchNavBarComponent,
    SearchComponent,
    MsearchnavbarComponent,
    MhsearchComponent,
    MfindsubComponent,
    SearchMapComponent,
    MsubsubComponent,
    ToastComponent,
    MsublineComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomepageModule,
    CoreModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    ProposalsModule,
    NoopAnimationsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
       apiKey: 'AIzaSyDURIknn5X5lPJfiH55SbKm6WtPA7uGQvo'
    }),
    BrowserAnimationsModule
  ],
  providers: [ApiService,SubmitService,SubmitLineService,HistoryService,DriverService,PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
