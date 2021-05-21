import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Friends } from 'src/app/friends/friends.model';
import { ModalController } from '@ionic/angular';
import { Card } from '../card.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {
  @Input() exRecord: Friends[];
  @Input() exDate: string;
  @Input() exLoc: string;
  @Input() exReq;
  @Input() activity: string;
  @Input() act: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.exLoc);
    console.log(this.act);
  }
  onCancel(){
    console.log('onCancel');
    this.modalCtrl.dismiss();

  }

}
