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
    id: '',
    subLine: "",
    subNumber: "",
    addLine: "",
    addNumber: ""
  };
  constructor(private submitService: SubmitService) { }

  ngOnInit() {
  }

  onClick() : void{
    console.log("ok");
     var a = 1;
     this.submitService.createSubmit(this.submit).then(dri => this.submit=dri);
   
  }

  onClear(): void {
    this.submit.id = null;
    this.submit.subLine = null;
    this.submit.subNumber = null;
    this.submit.addLine = null;
    this.submit.addNumber = null;

  }
}
