import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AppService } from 'src/app/services/app.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { $ } from 'protractor';

@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.scss'],
})
export class Popover2Component implements OnInit {
  userId;
  uploadProgress=0;
  res;
  constructor(private pc: PopoverController, private appService: AppService, private storage: AngularFireStorage) {
    this.appService.store.getUser().then(res=>{this.userId=res.id;});
   }

  ngOnInit() {}


  editPic= async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    const imageUrl = image.dataUrl;
    //console.log(image.dataUrl)
    this.appService.data.profileImageUrl=imageUrl;
    this.uploadPic(imageUrl);

  };

  removePic(){
    const defaultPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';
    this.pc.dismiss(defaultPic);
  }


uploadPic( file){
const metaData={
  contentType:'image/jpeg'
};

const uploadTask= this.storage.ref(this.userId).putString(file,'data_url',metaData).then(
  snapshot=>{
    console.log(snapshot);
    this.storage.ref(this.userId).getDownloadURL().toPromise().then(
      url=>{
        console.log(url,'url');
        this.res=url;
        this.pc.dismiss(this.res);
      });

  });
}
}
