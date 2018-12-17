import { Injectable } from '@angular/core';
import { Proposal } from '../domain/proposal';
import { Line } from '../domain/line';
// import { PROPOSALS } from '../temp-proposals';
import { Http, Headers } from '@angular/http';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private api_url;
  private headers;

  constructor(private http: Http,
    private apiService: ApiService  ) {
    this.api_url = apiService.getProposalUrl() + '/proposals';
    this.headers = apiService.getHeaders();
  }
  getProposals(): Promise<Proposal[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Proposal[])
            .catch(this.handleError);
  }
  // 按照 id 获取 proposal
  getProposalById(id: number): Promise<Proposal> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Proposal)
            .catch(this.handleError);
  }
  // 新建 proposal
  createProposal(proposal: Proposal): Promise<Proposal> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(proposal), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Proposal)
      .catch(this.handleError);
  }


  // 按name新建proposal
  createProposalByName(name: string): Promise<Proposal> {
    const proposal = {
      name: name
    };
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(proposal), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Proposal)
      .catch(this.handleError);
  }

  // 修改 proposal
  updateProposal(proposal: Proposal): Promise<Proposal> {
    const url = `${this.api_url}/${proposal.id}`;
    return this.http
      .put(url, JSON.stringify(proposal), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Proposal)
      .catch(this.handleError);
  }

  // 修改 line
  updateLine(proposal: Proposal): Promise<Line> {
    const lineUrl = this.apiService.getLineUrl() + '/line';
    const url = `${lineUrl}/${proposal.id}`;
    console.log(url);
    const line: Line = {
      id: proposal.id,
      lineId: proposal.lineId,
      stations: proposal.newStations
    };
    return this.http
      .put(url, JSON.stringify(line), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Line)
      .catch(this.handleError);

  }

  // 删除某个 proposal
  deleteProposal(proposal: Proposal): Promise<void> {
    const url = `${this.api_url}/${proposal.id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // 按id删除某个 proposal
  deleteProposalById(id: number): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
