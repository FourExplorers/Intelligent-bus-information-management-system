import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from 'src/app/domain/proposal';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProposalService } from '../../../service/proposal.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.css']
})
export class ProposalDetailComponent implements OnInit {

  proposal: Proposal;

  constructor(
    private proposalService: ProposalService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.proposalService.getProposalById(id)
            .then(proposal => this.proposal = proposal);
      }
    });
  }

  save(): void {
    this.proposalService.updateProposal(this.proposal)
          .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  accept(): void {
    this.proposalService.updateLine(this.proposal)
          .then( () => {
            this.reject();
          });
  }

  reject(): void {
    this.proposalService.deleteProposal(this.proposal)
          .then( () => this.goBack());
  }
}

