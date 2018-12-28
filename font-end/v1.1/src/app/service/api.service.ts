import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
@Injectable()
export class ApiService {

  constructor() { }
getUrl():string{
    return 'http://39.96.56.149:3004';
}
getLineUrl(): string {
  return 'http://39.96.56.149:3000';
}
getProposalUrl(): string {
  return 'http://39.96.56.149:3005';
}
getDriverUrl(): string{
return 'http://39.96.56.149:3001';
}

getHistoryUrl(): string
{ 
return 'http://39.96.56.149:3002';

}


getSubmitUrl(): string
{ 
return 'http://39.96.56.149:3003';

}



getHeaders(): Headers {
return new Headers({ 'Content-Type': 'application/json'});
}
}

