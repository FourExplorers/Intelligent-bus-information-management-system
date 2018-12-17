import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../../domain/proposal';
// import { PROPOSALS } from '../../temp-proposals';
import { ProposalService } from '../../../service/proposal.service';
import { Router } from '@angular/router';
import { ProposalsModule } from '../proposals.module';
@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposals: Proposal[];
  selectedProposal: Proposal;
  constructor(private proposalService: ProposalService, private router: Router) { }

  getProposals(): void {
    this.proposalService.getProposals().then(proposals => this.proposals = proposals);
  }

  ngOnInit() {
    this.getProposals();
  }

  add(_lineId: number, _name: string, _oldStations: string, _newStations: string, _reason: string): void {
    _name = _name.trim(); _oldStations = _oldStations.trim(); _newStations = _newStations.trim(); _reason = _reason.trim();
    const newProposal: Proposal = {
      id: this.proposals.length + 1,
      lineId: _lineId,
      name: _name,
      oldStations: _oldStations,
      newStations: _newStations,
      reason: _reason
    };
    this.proposalService.createProposal(newProposal)
          .then(proposal => {
            this.proposals.push(proposal);
            this.selectedProposal = null;
          });
  }

  delete(proposal: Proposal): void {
    this.proposalService.deleteProposalById(proposal.id)
          .then(() => {
            this.proposals = this.proposals.filter(p => p !== proposal);
            if (this.selectedProposal === proposal) { this.selectedProposal = null; }
          });
  }

  onSelect(proposal: Proposal): void {
    this.selectedProposal = proposal;
    this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/proposal', this.selectedProposal.id]);
  }
}
