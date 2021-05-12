import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';
import { Activities } from './acivities.model';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  x: number;
  loadedActivities: Activities[];
  loadedActivities2: Activities[];
  constructor(private appService: AppService, public actionSheetCtrl: ActionSheetController, public router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.x=this.appService.activity;
    console.log(this.x);
    this.loadedActivities=this.appService.storage.getActivities();
    this.loadedActivities2=this.appService.storage.getActivities2();
    console.log(this.loadedActivities);
  }




  addFriend(){
    //this.modalCtrl.create({component: DetailsComponent}).then(modalEl=>{
      //modalEl.present();
      this.router.navigateByUrl('/friends');
    //});
  }

}
