import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PopoverController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-popover3',
  templateUrl: './popover3.component.html',
  styleUrls: ['./popover3.component.scss'],
})
export class Popover3Component implements OnInit {
  userId;
  res;
  constructor(private pc: PopoverController, private appService: AppService, private storage:AngularFireStorage) { 
    this.appService.store.getUser().then(res=>{this.userId=res.id})
  }

  ngOnInit() {}

  editPic= async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    var imageUrl = image.dataUrl;
    //console.log(image.dataUrl)
    this.appService.data.profileImageUrl=imageUrl
    this.uploadPic(imageUrl)

  }
  uploadPic( file){
    var metaData={
      contentType:'image/jpeg'
    }
    var filepath=`${this.userId}/${file.name}`
    var uploadTask= this.storage.ref(filepath).putString(file,'data_url',metaData).then(
      snapshot=>{
        console.log(snapshot);
        this.storage.ref(filepath).getDownloadURL().toPromise().then(
          url=>{
            console.log(url,"url")
            this.res=url;
            this.pc.dismiss(this.res)
          })
         
      })
    }
}
