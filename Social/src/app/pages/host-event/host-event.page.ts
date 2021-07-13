import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.page.html',
  styleUrls: ['./host-event.page.scss'],

})
export class HostEventPage implements OnInit {

  eventTypeList=[]
  date=new Date();
  eventDetails: Record<string, any>;
  formSubmit = false;
  token: string;
  params = '';
  eventId: string;
  eventDetailsForm = this.formBuilder.group({
    eventLabel: ['', [Validators.required]],
    date: ['', [Validators.required]],
    eventType: ['', [Validators.required]],
    eventAddress: ['', [Validators.required]],
    eventPrivacy: ['', [Validators.required]],
    eventStatus: ['', [Validators.required]],
  });
  test: string; myDate = new Date();
   

 constructor(
   private datePipe:DatePipe,
    private appService: AppService,
    private  formBuilder: FormBuilder
  ) {this.eventTypeList=appService.data.eventType}

  ngOnInit() { 
    this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  get eventDetailsFormError() {
    return this.eventDetailsForm.controls;
  }

  async onSubmit() {
    this.formSubmit = true;
    if(this.eventDetailsForm.valid){
      console.log("aa")
    this.eventDetails =this.eventDetailsForm.value;
    await this.appService.store.getUser().then(res=>{
      console.log(res);
      console.log(res.id);
      console.log(res.fullname);
      this.token=res.token;
      this.eventDetails.HostId=res.id;
      this.eventDetails.HostName=res.fullname;
    });
    this.appService.calls.addNewEventCall(this.token,this.params,this.eventDetails).subscribe(res=>{this.eventId=(res["name"]);});
    console.log(this.eventDetails,'null');
    this.appService.nav.navigateBack('home')
    }
  }

  back =  () => this.appService.nav.navigateBack('home');

}