import { Component, OnInit } from '@angular/core';
import {Submit}   from '../submit';
import {SubmitService} from '../../../service/submit.service';


@Component({
  selector: 'app-msubsub',
  templateUrl: './msubsub.component.html',
  styleUrls: ['./msubsub.component.css']
})
export class MsubsubComponent implements OnInit {

 
  submit : Submit ={
    id: 1,
    subLine: "0",
    subNumber: "0",
    addLine: "0",
    addNumber: "0"
  };
  constructor(private submitService: SubmitService) { }

  ngOnInit() {
  }

  onClick() : void{
    console.log("ok");
     var a = 1;
     this.submitService.createSubmit(this.submit).then(dri => this.submit=dri);
  }
}
