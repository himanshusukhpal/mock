import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  status;
  hostId
  eventDetails;
  filterTerm:string
  goodResponse=[];
  evilResponseProps=[];
  userId;
  show=false;
  eventId:string
  constructor(private appService: AppService) {
    this.eventId=appService.data.eventId;
    this.appService.data.openEvent.subscribe(res=>{
      console.log(res);
      this.hostId=res.HostId;
       this.eventDetails=res});
    
   }

  ngOnInit() {
    this.appService.data.userData.subscribe(res=>{this.userId=res.id})
    console.log(this.userId,this.eventDetails.HostId)
    if(this.userId===this.eventDetails.HostId){
      this.show=true;
      if(this.eventDetails.guestList){this.evilResponseProps = Object.keys(this.eventDetails.guestList);   
      }   
      for (const prop of this.evilResponseProps) { 
        this.goodResponse.push(this.eventDetails.guestList[prop])
      }
      console.log(this.goodResponse,"a")
    }
  }
  back =  () => this.appService.nav.navigateBack('home');

  accept= (guest)=>{
    
    guest.requestStatus="accept"
   this.appService.calls.updateRequestStatusCall(this.eventId,guest.guestId,guest).subscribe(res=>{console.log(res)})
  }

    reject= (guest)=>{
    
    guest.requestStatus="reject"
   this.appService.calls.updateRequestStatusCall(this.eventId,guest.guestId,guest).subscribe(res=>{console.log(res)})
  }

  option= (guest)=>{
    console.log(guest.requestStatus)
   this.appService.calls.updateRequestStatusCall(this.eventId,guest.guestId,guest).subscribe(res=>{console.log(res)})
  }
}



  

 
