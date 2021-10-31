/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators} from '@angular/forms';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private appService: AppService,private  formBuilder: FormBuilder
  ) { }

  EventDetailsForm = this.formBuilder.group({
    EventLabel: ['', [Validators.required]],
    DateandTime: ['', [Validators.required]],
    EventType: ['', [Validators.required]]

  });

onSubmit(){
  console.log('submit');
}
back(){
  console.log('back');
}

  ngOnInit() { }

}
