import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private pc: PopoverController, private appService: AppService) { }

  ngOnInit() {}
 
  logOut()
  {
    this.appService.auth.logout();
    this.pc.dismiss();
  }

  addEvent=()=>{this.appService.nav.navigateForward('home/host-event') ;this.pc.dismiss();}

  account=()=>{this.appService.nav.navigateForward('home/account-details'); this.pc.dismiss();}

  myEvent = () => {this.appService.nav.navigateForward('home/my-events'); this.pc.dismiss(); }
}
