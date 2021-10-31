import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  myDate: any;
  newDate = new Date();
  test: any;
  constructor(private modalCtrl: ModalController, private datePipe: DatePipe) { }

  ngOnInit() {
    this.test = this.datePipe.transform(this.newDate, 'yyyy-MM-dd');

  }
  close(){
    this.modalCtrl.dismiss(this.myDate);
  }
}
