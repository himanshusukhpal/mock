/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

import { Friends } from 'src/app/models/friends.model';
import { Locations } from 'src/app/models/location.model';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  myDate: string = new Date().toISOString();
  filterTerm: string;
  requirement: string;
  displayList: Friends[]=[];
  id: number;
  display=[];
  location: Locations[]=[];
  cnfrmlist=[];
  cnfrmLoc: string;
  cnfrmDate: string;
  myLocation: string;
  cards: Card[]=[];
  element: Card={location:'',date:'',req:[],records:[]};
  selected: Friends[]=[];


  constructor(
    private appService: AppService,
  ) { }


  onCheck(){
    this.displayList.forEach(i => {
      console.log(i.check,i.id);
    });
  }

  onAddRequirements(form: NgForm){
    this.requirement=form.value.requirement;
    console.log(this.requirement);
    this.display.push(this.requirement);
    console.log(this.display);
    form.reset();
  }
  ngOnInit() {
    this.id=this.appService.activity;
    console.log(this.id);
    this.displayList=this.appService.data.userRecords;
    console.log(this.display);
    this.location=this.appService.data.location;
    console.log(this.location);
  }
 onConfirm(){
  this.displayList.forEach(i=>{
    if(i.check===true)
    {
      this.selected.push(i);
    }
  });
   console.log(this.myDate);
    this.element.location=this.myLocation;
    this.element.date=this.myDate;
    this.element.records=this.selected;
    this.element.req=this.display;

   console.log(this.myLocation);
   console.log(this.display);

   this.appService.data.cards.push(this.element);
   console.log(this.element);
   console.log(this.appService.data.cards);
   this.appService.nav.navigateForward('home/dashboard');
 }

}
