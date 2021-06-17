/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() { }

}
