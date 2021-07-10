import { DatePipe } from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.scss'],
  providers:[DatePipe]
})

export class HostEventComponent implements OnInit {

  date=new Date();
  eventDetails: Record<string, any>;
  formSubmit = false;
  token: string;
  params = '';
  eventId: string;
  eventDetailsForm = this.formBuilder.group({
    eventLabel: ['', [Validators.required]],
    // time: ['', [Validators.required]],
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
  ) { }

  ngOnInit() { 
    this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  get eventDetailsFormError() {
    return this.eventDetailsForm.controls;
  }

  async onSubmit() {
    this.formSubmit = true;
    console.log(this.eventDetailsForm.value.DateandTime);
    if(this.eventDetailsForm.valid){
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
    this.appService.modal.dismiss();
    }
  }

  back = async () => await this.appService.dismissModal();

}
