import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.scss'],
})
export class HostEventComponent implements OnInit {
  eventDetails:{}
  formSubmit = false;
 
  constructor(private appService: AppService, private  formBuilder: FormBuilder) { }

  ngOnInit() {}
  back = async () => {await this.appService.dismissModal();
  console.log("back");}

  get EventDetailsFormError() {
    return this.EventDetailsForm.controls;
  }
 async onSubmit()
 {
  this.formSubmit = true;
   if(this.EventDetailsForm.valid){

   
   this.eventDetails =this.EventDetailsForm.value;
   await this.appService.store.getUser().then(res=>{
     console.log(res);
     console.log(res.id);
     console.log(res.fullname);
     this.eventDetails['HostId']=res.id;
     this.eventDetails['HostName']=res.fullname;
   })
   console.log(this.eventDetails,"null");
   this.appService.modal.dismiss();
  }
  
 }
  EventDetailsForm = this.formBuilder.group({
    EventLabel: ['', [Validators.required]],
    DateandTime: ['', [Validators.required]],
    EventType: ['', [Validators.required]],
    EventAddress: ['', [Validators.required]],
    EventPrivacy: ['', [Validators.required]],
   
  });




}
