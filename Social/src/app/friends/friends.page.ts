/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../services/app.service';
import { Friends } from './friends.model';
import { Locations } from './location.model';
import { Router } from '@angular/router';
import { Card } from '../dashboard/card.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit{
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


  constructor(private appService: AppService, private router: Router) { }



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
    this.id=this.appService.networking.activity;
    console.log(this.id);
    this.displayList=this.appService.storage.userRecords;
    console.log(this.display);
    this.location=this.appService.storage.location;
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

   this.appService.storage.cards.push(this.element);
   console.log(this.element);
   console.log(this.appService.storage.cards);
   this.router.navigateByUrl('/dashboard');
 }

}
