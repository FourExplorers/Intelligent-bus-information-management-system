import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';

const routes: Routes = [
  { path: 'proposals', component: ProposalListComponent },
  { path: 'proposal/:id', component: ProposalDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],  // 注意此处是forChild
  exports: [ RouterModule ]
})
export class ProposalsRoutingModule {}
