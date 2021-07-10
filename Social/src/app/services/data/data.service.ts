/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



import { CallsService } from '../networking/calls.service';
import { StorageService } from './../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id:string;
  hostId: BehaviorSubject<string>= new BehaviorSubject<string>("");
  userData: BehaviorSubject<Record<string, unknown>> = new BehaviorSubject<Record<string, unknown>>({});
  eventsList: BehaviorSubject<Record<string, any>> = new BehaviorSubject<Record<string, any>>({});
  myeventsList: BehaviorSubject<Record<string, any>> = new BehaviorSubject<Record<string, any>>({});
  openEvent: BehaviorSubject<Record<string, any>> = new BehaviorSubject<Record<string, any>>({});
  eventType=["Birthday Party","Marriage Anniversary","House Party","Reunions","Weddings","Others"]
    

 
  constructor(
    private calls: CallsService,
    private store: StorageService
  ) {
   
  } 
   

  async userDataSync(user: Record<string, unknown>) {
    this.userData.next(user);
    this.store.setUser(user);
    this.hostIdSync();
    this.myEventsList();

  }

  async userAppDataSync() {
    this.startEventsList(); 
  }


  myEventsList(){
  console.log(this.hostId.value,"value");
  this.calls.myEventsListCall(this.hostId.value,5).subscribe(
      res=>{
        this.myEventsListSync(res);
      }
    );
  }
  startEventsList() {
    this.calls.startEventsListCall(5).subscribe(
      (res)=> {
        this.eventsListSync(res);
      }
    );
  }
  eventsListSync = (events: Record<string, any>) => this.eventsList.next(events);

  myEventsListSync = (events: Record<string, any>) => {this.myeventsList.next(events);}

  hostIdSync= ()=>{this.userData.subscribe(res=>
    {
      this.hostId.next(JSON.stringify(res.id))
    });
  }

  async removeEntireData() {
    this.store.removeUser();
  }

}
