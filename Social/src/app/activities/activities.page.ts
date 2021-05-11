import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';
import { Activities } from './acivities.model';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  x: number;
  loadedActivities: Activities[];
  loadedActivities2: Activities[];
  constructor(private appService: AppService, public actionSheetCtrl: ActionSheetController, public router: Router) { }

  ngOnInit() {
    this.x=this.appService.activity;
    console.log(this.x);
    this.loadedActivities=this.appService.storage.getActivities();
    this.loadedActivities2=this.appService.storage.getActivities2();
    console.log(this.loadedActivities);
  }

  addFriend(){
    console.log('cdc');
    this.actionSheetCtrl.create(
      {
        header:'Select',
        buttons:[
          {
            text:'Add a friend',
            handler:()=>{this.onAddFriend();}
          },
          {
            text:'Go solo',
            handler:()=>{}
          },
          {
            text:'Cancel',
            role:'Cancel',
            icon:'close',
            handler:()=>{}

          }
        ]
      }
    ).then(actionSheetEl=>{actionSheetEl.present();});
  }

  onAddFriend(){
    this.router.navigateByUrl('/friends');
  }

}
