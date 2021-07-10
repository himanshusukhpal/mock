/* eslint-disable curly */
/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { IonSlides } from '@ionic/angular';
import { HostEventComponent } from './host-event/host-event.component';
import { IonInfiniteScroll } from '@ionic/angular';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DatePipe } from '@angular/common';
import { async } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage implements OnInit{

  @ViewChild('slides' ,{ static: true })  slides: IonSlides;

  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';
status=false;
  user = {};
  guestList:{}
  eventsArr=[]
  eventBlocks = [];
  hostId;
  userName;
  bool:any=[]
  userId
  requestStatus: string
  constructor(
    private appService: AppService
  ) {
    this.appService.data.userData.subscribe(res=>{
      this.user=res;
      this.hostId=res.id;
      this.userName=res.fname;
     
    });
    this.appService.data.eventsList.subscribe(res=>{
     
      Object.keys(res).forEach(k=>{ 
        this.guestList=res[k].guestList;
        if(this.guestList){ Object.keys(this.guestList).forEach(key=>{if(key===this.hostId){res[k].show="true";console.log(res,"a")}})}
        //Object.keys(this.guestList).forEach(key=>{if(key===this.hostId){res[k].show="true";console.log(res,"a")}})
        this.eventsArr.push(res[k].guestList)    
      })
      console.log(this.eventsArr)
      this.eventBlocks.splice(0,this.eventBlocks.length,res)}); 
    console.log(this.eventBlocks,"e");
    
  }

  ngOnInit() { 
    
    
  }

  ionViewWillEnter() { 
  }

 

  onClick(){
    this.appService.nav.navigateForward('profile');
  }

  eventDetails(event){
    this.appService.data.openEvent.next(event.value);
    this.appService.presentModal(EventDetailsComponent,{});
  }

  loadMore(event) {
    setTimeout(() => {
      const lastKey = Object.keys(this.eventBlocks[this.eventBlocks.length-1]).pop();
      this.appService.calls.loadMoreEventsCall(lastKey,5).subscribe(
        res => {
          Object.keys(res).forEach(k=>{ 
            this.guestList=res[k].guestList;
            if(this.guestList){ Object.keys(this.guestList).forEach(key=>{if(key===this.hostId){res[k].show="true";console.log(res,"a")}})}
           
            this.eventsArr.push(res[k].guestList)    
          })
          delete res[(Object.keys(res).shift())];
          if(Object.keys(res).length) this.eventBlocks.push(res);
          console.log(this.eventBlocks);
        }
      );
      event.target.complete();
    }, 1000);
  }
  interested(event,index){
    this.bool[index]=false;
    this.requestStatus="pending";
    console.log(this.userName,)
    const guestDetails={guestName :this.userName, guestId:this.hostId, requestStatus:this.requestStatus}
    this.appService.calls.addGuestsToEventCall(event.key, this.hostId,guestDetails)
    .subscribe(res=>{console.log(res)})

}


  close(){}

  swipeNext = () => this.appService.nav.navigateForward('home/chat');

  onAddActivity = () => this.appService.nav.navigateBack('activities');

  onLogout = () => this.appService.auth.logout();

  onProfile = () => this.appService.nav.navigateForward('profile');

  hostEventPage = () => this.appService.presentModal( HostEventComponent,{});

  myEvents = () => {this.appService.nav.navigateForward('home/my-events'); }

}
