import { Component, OnInit } from '@angular/core';
import  { Ng2SmartTableModule}  from 'ng2-smart-table';
import { LocalDataSource} from 'ng2-smart-table';
import {Submit}  from '../submit';
import {SubmitService} from '../../../service/submit.service';

@Component({
  selector: 'app-mfindsub',
  templateUrl: './mfindsub.component.html',
  styleUrls: ['./mfindsub.component.css']
})
export class MfindsubComponent implements OnInit {

  constructor(private submitService: SubmitService) { }



  submits: Submit[];
  source: LocalDataSource;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },

    columns: {
      
        
         subLine: {
        title: '减少的路线',
        filter: false
      },
        subNumber: {
        title: '减少路线的车辆',
        filter: false
      },
       addLine: {
        title: '增加的路线',
        filter: false
      }, 
       addNumber: {
        title: '增加路线的车辆',
        filter: false
      }

    },
    attr: {
      class: 'table table-bordered'
    }
  };

  data: Submit[];

  ngOnInit() {
    console.log("init");
    this.submitService.getSubmits().then(hi => this.submits=hi);

  }

  onSelect($event): void {
    console.log($event.target);
    
  }

  onSave($event): void{
    console.log($event.target);
   
    this.submitService.getSubmits().then(dri => this.submits=dri);
    this.source = new LocalDataSource(this.submits);
    // this.driverService.getDrivers.then(drivers => this.drivers = drivers);

  }

  onSearch( query: string = ''){
    this.source.setFilter([
      // fields we want to include in the search
      
      {
        field: 'subLine',
        search: query
      },
      {
        field: 'addLine',
        search: query
      }
    ], false);
  }
}
