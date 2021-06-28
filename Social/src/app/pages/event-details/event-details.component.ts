import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {

  constructor(private appService: AppService) { }
id:string;
eventDetails;
back = async () => {await this.appService.dismissModal();
}
  ngOnInit() {
    this.id=this.appService.data.eventId;
    this.appService.calls.getEventbyId(this.id).subscribe(res=>{
      console.log(res);
      this.eventDetails=res;
    })
  }
}
