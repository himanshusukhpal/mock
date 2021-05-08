import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private appService: AppService) {}

  onStayIn(){
    this.router.navigateByUrl('/activities');
    this.appService.activity=1;
  }
  onGoOut(){
    this.router.navigateByUrl('/activities');
    this.appService.activity=2;
  }
}
