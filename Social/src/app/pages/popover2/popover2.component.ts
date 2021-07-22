import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.scss'],
})
export class Popover2Component implements OnInit {

  constructor(private pc: PopoverController, private appService: AppService) { }

  ngOnInit() {}

  editPic= async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    var imageUrl = image.dataUrl;
    console.log(image.dataUrl)
    this.appService.data.profileImageUrl=imageUrl
  this.pc.dismiss(imageUrl);
  
  }

  removePic(){
    const defaultPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU'
    this.pc.dismiss(defaultPic)
  }
}
