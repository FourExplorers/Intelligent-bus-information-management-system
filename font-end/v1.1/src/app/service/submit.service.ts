import { Injectable } from '@angular/core';
import {Submit}  from '../people/manager/submit';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class SubmitService {


  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) 
  { this.api_url = apiService.getSubmitUrl() + '/submit';
  this.headers = apiService.getHeaders();
  }

  SUBMITS:  Submit[] = [{
    id: 1,
    subLine: "1",
    subNumber:  "1000",
    addLine: "2",
    addNumber: "1000"
  }];


  getSubmits(): Promise<Submit[]> {
    const url = `${this.api_url}`;
    console.log(url);
    console.log("are you ok");
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as  Submit[])
        .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
   }

//新建submit
createSubmit(submit: Submit): Promise<Submit> {
  const url = `${this.api_url}`;
  return this.http
    .post(url, JSON.stringify(submit), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as Submit)
    .catch(this.handleError);
}

}
