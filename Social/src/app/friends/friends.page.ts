/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../services/app.service';
import { Friends } from './friends.model';
import { Locations } from './location.model';

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



  constructor(private appService: AppService) { }



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


}
