import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { BosschangeComponent } from '../people/boss/bosschange/bosschange.component';
import { ErrorComponent} from '../error/error.component'
const routes: Routes = [
  {
    path: 'login',
    component: RegisterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
     path:'boss',
     component:BosschangeComponent,
  },
  {
    path:'error',
    component:ErrorComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}