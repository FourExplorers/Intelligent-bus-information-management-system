import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
@Injectable()
export class ApiService {

  constructor() { }
getUrl():string{
    return 'http://localhost:3004';
}
getLineUrl(): string {
  return 'http://localhost:3000';
}
getProposalUrl(): string {
  return 'http://localhost:3005';
}
getDriverUrl(): string{
return 'http://localhost:3001';
}

getHistoryUrl(): string
{ 
return 'http://localhost:3002';

}


getSubmitUrl(): string
{ 
return 'http://localhost:3003';

}



getHeaders(): Headers {
return new Headers({ 'Content-Type': 'application/json'});
}
}

