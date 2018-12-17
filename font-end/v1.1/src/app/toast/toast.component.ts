import { Component, OnInit } from '@angular/core';
import { PopupService} from'../service/popup.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
private toastParams;
private popupSVC:PopupService;
  constructor() { }

  ngOnInit() {
    this.toastParams = this.popupSVC.getToastParams();
  }

}
