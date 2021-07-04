import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})

export class EventDetailsComponent implements OnInit {

  eventDetails;

  constructor(
    private appService: AppService
  ) {
    this.appService.data.openEvent.subscribe(res=> this.eventDetails=res);
  }

  ngOnInit() { }

  back = async () => await this.appService.dismissModal();
}
