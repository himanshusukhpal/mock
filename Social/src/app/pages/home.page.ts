/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { Friends } from 'src/app/models/friends.model';
import { IonSlides } from '@ionic/angular';
import { HostEventComponent } from './host-event/host-event.component';
import { map } from 'rxjs/operators';
import{IonInfiniteScroll} from '@ionic/angular';
import { EventDetailsComponent } from './event-details/event-details.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  @ViewChild('slides' ,{ static: true })  slides: IonSlides;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  swipeNext(){
    this.appService.nav.navigateForward('home/chat');
  }
 isFinished=false;
  page_number = 1;
  page_limit = 8;
  user = {};
  url: string;
  mydata:any=[]
  mydata1:any=[]
eventList:any=[];
  token: string;
  id: string;
  userDetails={};
  sampleLoc='Miraj Cinemas';
  

 
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

     this.appService.calls.getEventListCall(this.token,this.url).pipe(
       map(resData=>{
         const user=[]
         for(const key in resData)
         {
          // console.log(resData[key]);
          user.push({eventId:key,...(resData[key] as object)})
         }
         console.log(user);
         return user
       })
      
     )
      .subscribe(async res=>{
        this.eventList=res; 
        console.log(this.eventList.length,"l");
        this.mydata = Object.keys(this.eventList).map(key=>{
          this.lastkey=this.eventList[key].eventId;
          this.mydata.push({eventId:key,...this.eventList[key]});
           return (this.eventList[key]);
          })
      }, error => {
        console.log(error);
      })
      console.log(this.mydata, "my");
    }
    

  

  onClick(){
    console.log(this.mydata);
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

  eventDetails(event){
    console.log(event.eventId);
this.appService.data.eventId=event.eventId;
this.appService.presentModal(EventDetailsComponent,{});

  }

  loadMore(event){
   console.log("load");
   console.log(this.lastkey)
    this.url = '?orderBy="$key"&startAt="'+this.lastkey+'"&limitToFirst=4';
    this.appService.calls.getEventListCall(this.token,this.url).pipe(
      map(resData=>{
        const user=[]
        for(const key in resData)
        {
         // console.log(resData[key]);
         user.push({eventId:key,...(resData[key] as object)})
        }
        console.log(user);
        return user
      })
     
    ).subscribe(async res=>{
      this.eventList=res; 
     
      event.target.complete();
      
      
      this.mydata1 = Object.keys(this.eventList).map(key=>{
         if(this.lastkey!=this.eventList[key].eventId)
         {
        this.lastkey=this.eventList[key].eventId;
        this.mydata1.push({eventId:key,...this.eventList[key]});
         }
         return (this.eventList[key]);
         
        }
        )
        this.mydata=this.mydata.concat(this.mydata1);
        this.mydata.filter((item,index)=>{
          return this.mydata.indexOf(item)===index;
        })
        console.log(this.mydata1,"d1");
        console.log(this.mydata,"d")
        }, error => {
          console.log(error);
        });
  
}}
