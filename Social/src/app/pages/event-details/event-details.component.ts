import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})

export class EventDetailsComponent implements OnInit {

  eventDetails;
  filterTerm:string
  goodResponse=[];
  evilResponseProps=[];
  userId;
  show=false;
  constructor(
    private appService: AppService
  ) {
    this.appService.data.openEvent.subscribe(res=> this.eventDetails=res);
    
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
      console.log(this.goodResponse)
    }
console.log(this.show)
    
   }

  back = async () => await this.appService.dismissModal();
}
