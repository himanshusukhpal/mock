import { Injectable } from '@angular/core';
import { NetworkingService } from './networking/networking.service';
import { AlertService } from './alert/alert.service';
import { StorageService } from './storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  activity=1;

  constructor(
    public networking: NetworkingService,
    public alert: AlertService,
    public storage: StorageService

  ) { }
}
