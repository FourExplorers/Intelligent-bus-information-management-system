import { Component, OnInit } from '@angular/core';
import {SubLine} from '../sub-line';
import { SubmitLineService} from '../../../service/submit-line.service';

@Component({
  selector: 'app-msubline',
  templateUrl: './msubline.component.html',
  styleUrls: ['./msubline.component.css']
})
export class MsublineComponent implements OnInit {

  constructor( private submitService: SubmitLineService) { }

  submit : SubLine ={
    id: "",
    lineId: "",
    name: "",
    oldStations: "",
    newStations: "",
    reason: ""
  };

  ngOnInit() {
  }
  onClick() : void{
    console.log("ok");
     var a = 1;
     this.submitService.createSubmit(this.submit).then(dri => this.submit=dri);
  }

  onClear(): void {
    this.submit.id = null;
    this.submit.lineId = null;
    this.submit.name = null;
    this.submit.oldStations = null;
    this.submit.newStations = null;
    this.submit.reason = null;

  }

}
