/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { AppService } from 'src/app/services/app.service';

import { Friends } from 'src/app/models/friends.model';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  sampleLoc='Miraj Cinemas';
  filterTerm: string;
  buttons=true;
  cards=true;
  sampleDateTime: string = new Date().toISOString();
  activity='Watch a movie!';
  activity2: string;
  addedCard: Card[]=[];
  sampleRecord: Friends[]=[
    {
      id: 1,
      name: 'Harry Potter',
      email: 'harry@gryffindor@hogwarts',
      imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/Michael-Porter-Profile.png',
      check: false
    },
    {
      id: 2,
      name: 'Ron Weasley',
      email: 'ron@gryffindor@hogwarts',
      imageUrl:'https://camo.githubusercontent.com/7a22182cae9e758489a9e0492b03cb7c45f79574c156db6a22b1c12e3fd92271/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f736e6170636861742d6c656e732d6173736574732f66316130393139342d663032642d343365642d393262382d3632653834333137396666302f6c656e7353747564696f2f4e73617270726f66696c6569636f6e2e4a5047',
      check: false
    },
    {
      id: 3,
      name:'Hermoine Granger',
      email: 'hermoine@gryffindor@hogwarts',
      imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/NATALIESUTO_Profile-Natalie-Suto.JPG',
      check: false
    },
    {
      id: 4,
      name: 'Draco Malfoy',
      email: 'draco@slytherin.hogwarts',
      imageUrl:'https://camo.githubusercontent.com/7a22182cae9e758489a9e0492b03cb7c45f79574c156db6a22b1c12e3fd92271/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f736e6170636861742d6c656e732d6173736574732f66316130393139342d663032642d343365642d393262382d3632653834333137396666302f6c656e7353747564696f2f4e73617270726f66696c6569636f6e2e4a5047',
      check: false
    }
  ];

  sampleReq=['Wand','Cloak','Philospher Stone'];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

    this.appService.data.exampleLoc=this.sampleLoc;
    this.appService.data.exampleDate=this.sampleDateTime;
    this.appService.data.exampleRec=this.sampleRecord;
    this.appService.data.exampleReq=this.sampleReq;
    this.addedCard=this.appService.data.cards;
  }

  ionViewWillEnter(){
    console.log(this.appService.activityName);
    this.activity2=this.appService.activityName;
  }

  onAddActivity = () => this.appService.nav.navigateBack('/home');

  onDetail = () => this.appService.presentModal( ActivityDetailComponent, {
    exLoc:this.sampleLoc,
    exDate: this.sampleDateTime,
    exRecord: this.sampleRecord,
    exReq: this.sampleReq,
    activity: this.activity
  }
  );

  onDetail2(date: string,location: string,record: Friends[] ,req: Array<string>){
    console.log(record);
    console.log(location);
    console.log(this.activity2);
    console.log(this.addedCard);
    this.appService.presentModal( ActivityDetailComponent, {
      exDate: date,
      exLoc: location,
      exRecord: record,
      exReq :req,
      act: this.activity2
    });
    console.log('In on detail');
  }

  onAccept() {
    console.log('In Accept');
    this.buttons=false;
  }

  onDecline() {
    this.cards=false;
  }

}
