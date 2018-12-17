import { Injectable } from '@angular/core';
import {History}  from '../people/manager/history';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';
import { stringify } from 'querystring';
import { line } from '../people/citizen/line';




@Injectable()
export class HistoryService {


  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) { 
    this.api_url = apiService.getHistoryUrl() + '/history';
    this.headers = apiService.getHeaders();
  }


  HISTORYS: History[] = [{
    id: 1,
    line: "1",
    numberPeople:  "1000"
  }];


  getHistorys(): Promise<History[]> {
    const url = `${this.api_url}`;
    console.log(url);
    console.log("are you ok");
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as  History[])
        .catch(this.handleError);
}


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
   }

}
