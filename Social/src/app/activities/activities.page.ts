import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  x: number;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.x=this.appService.activity;
    console.log(this.x);
  }

}
