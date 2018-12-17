import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';
import { ProposalsRoutingModule } from './proposals-routing.module';
import { ProposalService } from '../../service/proposal.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProposalsRoutingModule
  ],
  declarations: [
    ProposalListComponent,
    ProposalDetailComponent
  ],
  providers: [ ProposalService ]
})
export class ProposalsModule {}
