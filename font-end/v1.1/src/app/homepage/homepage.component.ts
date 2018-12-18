import { Component, OnInit, Inject } from '@angular/core';
import { User} from '../domain/user'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  //styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
user:User;
s:string;
Userid:string;
  constructor(@Inject('user')private service) { }

  ngOnInit() {
      this.Userid = localStorage.getItem('userId');
      console.log(this.Userid);
      this.s='/'+localStorage.belongclass;
  }


}
