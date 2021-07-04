import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Activities } from 'src/app/models/acivities.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  x: number;
  loadedActivities: Activities[];
  loadedActivities2: Activities[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.x=this.appService.activity;
    console.log(this.x);
    // this.loadedActivities=this.appService.data.getActivities();
    // this.loadedActivities2=this.appService.data.getActivities2();
    console.log(this.loadedActivities);
  }

  addFriend(id: number, title: string){
    console.log(id);
    this.appService.activity=id;
    this.appService.activityName=title;
    console.log(this.appService.activityName);
    this.appService.nav.navigateForward('home/friends');
  }

}
