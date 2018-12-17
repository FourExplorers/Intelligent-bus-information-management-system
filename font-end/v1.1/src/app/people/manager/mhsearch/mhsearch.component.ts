import { Component, OnInit } from '@angular/core';
import  { Ng2SmartTableModule}  from 'ng2-smart-table';
import { LocalDataSource} from 'ng2-smart-table';
import { History} from '../history'
import {HistoryService}  from '../../../service/history.service';

@Component({
  selector: 'app-mhsearch',
  templateUrl: './mhsearch.component.html',
  styleUrls: ['./mhsearch.component.css']
})
export class MhsearchComponent implements OnInit {

  constructor(private  historyService: HistoryService) { }


  historys: History[];
  source: LocalDataSource;


  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },

    columns: {
      
        
         line: {
        title: '路线id',
        filter: false
      },
      numberPeople: {
        title: '单位时间人流量',
        filter: false
      }

    },
    attr: {
      class: 'table table-bordered'
    }
  };

  data: History[];

  ngOnInit() {
    console.log("init");
    this.historyService.getHistorys().then(hi => this.historys=hi);
  }


  onSelect($event): void {
    console.log($event.target);
    
  }

  onSave($event): void{
    console.log($event.target);
    var l1:History = { id: 1,
      line: "hi",
      numberPeople: "hi",
    }
      console.log(l1);
    var l2 :History = { 
      id: 1,
      line: "hi",
      numberPeople: "hi",
      };
      console.log(l1);
    var la:History[] = [] ;
    la.push(l1);
    la.push(l2);
    //  this.data = JSON.stringify(la);
    console.log(JSON.stringify(la));
    this.historyService.getHistorys().then(dri => this.historys=dri);
    this.source = new LocalDataSource(this.historys);
    // this.driverService.getDrivers.then(drivers => this.drivers = drivers);

  }

  onSearch( query: string = ''){
    this.source.setFilter([
      // fields we want to include in the search
      
      {
        field: 'driverId',
        search: query
      },
      {
        field: 'workline',
        search: query
      }
    ], false);
  }

}
