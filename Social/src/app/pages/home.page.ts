/* eslint-disable curly */
/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { IonSlides } from '@ionic/angular';
import { HostEventComponent } from './host-event/host-event.component';
import { IonInfiniteScroll } from '@ionic/angular';
import { EventDetailsComponent } from './event-details/event-details.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  @ViewChild('slides' ,{ static: true })  slides: IonSlides;

  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';

  user = {};
  eventBlocks = [];

  constructor(
    private appService: AppService
  ) {
    this.appService.data.userData.subscribe(res=>this.user=res);
    this.appService.data.eventsList.subscribe(res=>this.eventBlocks.splice(0,this.eventBlocks.length,res));
    console.log(this.user);
    console.log(this.eventBlocks);
  }

  ngOnInit() { }

  ionViewWillEnter() { }

  swipeNext = () => this.appService.nav.navigateForward('home/chat');

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
          delete res[(Object.keys(res).shift())];
          if(Object.keys(res).length) this.eventBlocks.push(res);
          console.log(this.eventBlocks);
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

  onAddActivity = () => this.appService.nav.navigateBack('activities');

  onLogout = () => this.appService.auth.logout();

  onProfile = () => this.appService.nav.navigateForward('profile');

  hostEventPage = () => this.appService.presentModal( HostEventComponent,{});

}
