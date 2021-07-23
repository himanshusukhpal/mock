import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonSlides } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';


@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.page.html',
  styleUrls: ['./host-event.page.scss'],

})
export class HostEventPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10
  };
  sliderTwo:any;
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
  eventPics=[]
    

 constructor(
   private datePipe:DatePipe,
    private appService: AppService,
    private  formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer
  ) {
    this.eventTypeList=appService.data.eventType ;
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
  slidesItems: [
    {
      id: 324,
      link:"https://icon-library.com/images/add-photo-icon/add-photo-icon-29.jpg"
    },
    {
      id: 321,
      link:"https://icon-library.com/images/add-photo-icon/add-photo-icon-29.jpg"
    },
    {
      id: 435,
      link:"https://icon-library.com/images/add-photo-icon/add-photo-icon-29.jpg"
    },
    {
      id: 524,
      link:"https://icon-library.com/images/add-photo-icon/add-photo-icon-29.jpg"
    },
    {
      id: 235,
      link:"https://icon-library.com/images/add-photo-icon/add-photo-icon-29.jpg"
    }
  ]

  }
}


  ngOnInit() { 
    this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

 
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

 

  addPic= async (s) =>{ const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl
  });
  var imageUrl = image.dataUrl;
  console.log(image.dataUrl)
  s.link=imageUrl
  this.eventPics.push(imageUrl)

  }
  get eventDetailsFormError() {
    return this.eventDetailsForm.controls;
  }


  async onSubmit() {
    this.formSubmit = true;
    if(this.eventDetailsForm.valid){
      console.log(this.eventDetailsForm.get['eventPics'].value,"eventDetails")
      console.log(this.eventDetailsForm.get['date'].value,"date")
      this.eventDetailsForm.controls['date'].setValue(new Date(this.eventDetailsForm.get['date'].value));
    this.eventDetails =this.eventDetailsForm.value;
    await this.appService.store.getUser().then(res=>{
      this.token=res.token;
      this.eventDetails.HostId=res.id;
      this.eventDetails.HostName=res.fullname;
    });
    this.appService.calls.addNewEventCall(this.token,this.params,this.eventDetails).subscribe(res=>{this.eventId=(res["name"]);
  console.log(res)
  });
    console.log(this.eventDetails,'null');
    this.appService.nav.navigateBack('home')
    }
  }

  back =  () => this.appService.nav.navigateBack('home');

  onSwiper=(event)=> console.log(event)

}