/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Activities } from '../../models/acivities.model';
import { Friends } from '../../models/friends.model';
import { Locations } from '../../models/location.model';
import { Card } from '../../models/card.model';
import { User } from 'src/app/models/user.model';

import { CallsService } from '../networking/calls.service';
import { StorageService } from './../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userData: BehaviorSubject<Record<string, unknown>> = new BehaviorSubject<Record<string, unknown>>({});
  eventsList: BehaviorSubject<Record<string, any>> = new BehaviorSubject<Record<string, any>>({});
  openEvent: BehaviorSubject<Record<string, any>> = new BehaviorSubject<Record<string, any>>({});

  constructor(
    private calls: CallsService,
    private store: StorageService
  ) { }

  async userDataSync(user: Record<string, unknown>) {
    this.userData.next(user);
    this.store.setUser(user);
  }

  async userAppDataSync() {
    this.startEventsList();
  }

  startEventsList() {
    this.calls.startEventsListCall(5).subscribe(
      (res)=> {
        this.eventsListSync(res);
      }
    );
  }
  eventsListSync = (events: Record<string, any>) => this.eventsList.next(events);

  async removeEntireData() {
    this.store.removeUser();
  }

}
