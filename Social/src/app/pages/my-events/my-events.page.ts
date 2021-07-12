import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
})
export class MyEventsPage implements OnInit {
  myEvents= [];
  userId;
  filterTerm: string; 
  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log("init")
      this.appService.data.myeventsList.subscribe(res=>{
        console.log(res);
        this.myEvents.splice(0,this.myEvents.length,res)});
        
      console.log(this.myEvents); 

  }

  loadMore(event) {
    setTimeout(() => {
      const lastKey = Object.keys(this.myEvents[this.myEvents.length-1]).pop();
      this.appService.calls.loadMoreEventsCall(lastKey,5).subscribe(
        res => {
          delete res[(Object.keys(res).shift())];
          if(Object.keys(res).length) this.myEvents.push(res);
          console.log(this.myEvents);
        }
      );
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 1000);
  }

  eventDetails(event){
    this.appService.data.openEvent.next(event.value);
    this.appService.nav.navigateForward('home/event-details')
    //this.appService.presentModal(EventDetailsComponent,{});
  }

  home=()=>{this.appService.nav.navigateBack("home")}
}
