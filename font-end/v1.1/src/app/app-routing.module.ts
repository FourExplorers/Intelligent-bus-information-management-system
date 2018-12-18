import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from'./register/register.component';
import { MainComponent }      from './first/main/main.component';
import { InitComponent}       from './first/init/init.component';
import { AuthGuardService}    from './service/auth-guard.service';
import { SearchNavBarComponent } from './people/search-nav-bar/search-nav-bar.component';
import { MdsearchComponent} from './people/manager/mdsearch/mdsearch.component';
import { ErrorComponent} from './error/error.component'
import { DsearchComponent} from './people/driver/dsearch/dsearch.component'
import { SearchComponent} from './people/citizen/search/search.component'
import { SearchMapComponent } from './people/citizen/search-map/search-map.component'
import {MhsearchComponent}   from './people/manager/mhsearch/mhsearch.component';
import {MfindsubComponent}  from './people/manager/mfindsub/mfindsub.component';
import { MsubsubComponent} from './people/manager/msubsub/msubsub.component';
import {BossnavbarComponent} from './people/boss/bossnavbar/bossnavbar.component';
import {ProposalListComponent} from './people/boss/proposal-list/proposal-list.component'
import {ProposalDetailComponent} from './people/boss/proposal-detail/proposal-detail.component'
import {MsearchnavbarComponent} from './people/msearchnavbar/msearchnavbar.component'
const routes: Routes = [
  {
     path: '',component: SearchNavBarComponent 
  },
  {
    path:'citizen',redirectTo:'',pathMatch:'full'
  },
  {
     path:'homepage',
     canActivate: [AuthGuardService],
     loadChildren:'./homepage/homepage.module#HomepageModule'      
  },
  {
   path:'register',component:RegisterComponent
 },
 {
   path:'login',component:RegisterComponent
 },
 {
    path:'driver',component:DsearchComponent
 },
 {
   path:'manager',
   component:MsearchnavbarComponent,
 },
 {
    path:'ceo',
    component:BossnavbarComponent,
 },
 {
  path: 'search', component: SearchComponent
 },
 {
  path:'search1',component:SearchMapComponent
 },
    {path: 'history', component: MhsearchComponent},
    {path: 'submit', component:  MfindsubComponent},
    {path: 'subsubmit', component: MsubsubComponent},
    { path: 'proposals', component: ProposalListComponent },
    { path: 'proposal/:id', component: ProposalDetailComponent},
    {
      path:'##',
      component:ErrorComponent,
    },
    {
      path:'**',
      component:ErrorComponent,
     }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
