import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private appService: AppService) {}

  onStayIn(){
    this.appService.activity=1;
    this.appService.nav.navigateForward('home/activities');
  }
  onGoOut(){
    this.appService.activity=2;
    this.appService.nav.navigateForward('home/activities');
  }
}
