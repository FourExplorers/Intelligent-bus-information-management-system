import { Injectable } from '@angular/core';
import {SubLine} from '../people/manager/sub-line';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class SubmitLineService {

  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) 
  { this.api_url = apiService.getProposalUrl() + '/proposals';
  this.headers = apiService.getHeaders();
  }

  SUBMITS:  SubLine[] = [{
   
    id: "",
    lineId: "",
    name: "0",
    oldStations: "0",
    newStations: "0",
    reason: "0"
  }];


  getSubmits(): Promise<SubLine[]> {
    const url = `${this.api_url}`;
    console.log(url);
    console.log("are you ok");
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as  SubLine[])
        .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
   }

//新建submit
createSubmit(submit: SubLine): Promise<SubLine> {
  const url = `${this.api_url}`;
  var a = JSON.stringify(submit);
  return this.http
    .post(url, JSON.stringify(submit), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as SubLine)
    .catch(this.handleError);
}
}
