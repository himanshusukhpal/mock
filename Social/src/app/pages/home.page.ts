/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { Friends } from 'src/app/models/friends.model';
import { IonSlides } from '@ionic/angular';
import { HostEventComponent } from './host-event/host-event.component';
import { map } from 'rxjs/operators';
import{IonInfiniteScroll} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  @ViewChild('slides' ,{ static: true })  slides: IonSlides;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  swipeNext(){
    this.slides.slideTo(2, 400);
  }
 
  page_number = 1;
  page_limit = 8;
  user = {};
  url: string;
  mydata:any=[]
eventList:any=[];
  token: string;
  id: string;
  userDetails={};
  sampleLoc='Miraj Cinemas';
  filterTerm: string; 
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

 
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';

  constructor(
    private appService: AppService
  ) {
    this.appService.data.userData.subscribe(res=>this.user=res);
    console.log(this.user);
  }

  
 
lastkey:""

  async ngOnInit() {
    await this.getEvent();

  }
  

  async ionViewWillEnter(){
    await this.getEvent();
    
  }

 async getEvent(){
  this.url = '?orderBy="$key"&limitToFirst=4';
    this.token=await this.appService.store.getToken()

     this.appService.calls.getEventListCall(this.token,this.url)
      .subscribe(async res=>{
        this.eventList=res; 
        console.log(res,"res");
        this.mydata = Object.keys(this.eventList).map(key=>{
          this.lastkey=this.eventList[key];
           return this.eventList[key];})
        // for (let i = 0; i < res.length; i++) {
        //   this.mydata.push(res[i]);
        // }
        console.log(this.mydata,"bb",this.lastkey);
        
      }, error => {
        console.log(error);
      })
        // this.eventList=res;
        // console.log(this.eventList,"e");
        // this.mydata = Object.keys(this.eventList).map(key => {
        //   console.log(this.eventList[key]);
        //   return this.eventList[key];
        // })
     // })
    }
    

  
  onClick2(){
    console.log("clicked");}

  onClick(){
    
    this.appService.nav.navigateForward('profile');
  }
  onAddActivity() {
    this.appService.nav.navigateBack('activities')};

 
 
  onLogout = () => this.appService.auth.logout();

  onProfile(){
    this.appService.nav.navigateForward('profile');
  }

 
  hostEventPage = () => {
    this.appService.presentModal( HostEventComponent,{});
    
  }

  loadMore(event){
   console.log("load");
    this.url = '?orderBy="$key"&startAt='+this.lastkey+'&limitToFirst=2';
     this.appService.calls.getEventListCall(this.token,this.url)
      .subscribe(async res=>{
        this.eventList=res; 
        console.log(res,"res");
        event.target.complete();
        this.mydata = Object.keys(this.eventList)
        .map(key=>{
          this.lastkey=this.eventList[key];
           return this.eventList[key];
          })
        }, error => {
          console.log(error);
        });
  
}}
