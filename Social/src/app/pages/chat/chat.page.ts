import { Component, OnInit } from '@angular/core';
import { Friends } from 'src/app/models/friends.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private appservice: AppService) { }
  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';
  filterTerm: string; 
  sampleRecord: Friends[]=[
    {
      id: 1,
      name: 'Harry Potter',
      email: 'harry@gryffindor@hogwarts',
      imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/Michael-Porter-Profile.png',
      check: false
    },
    {
      id: 2,
      name: 'Ron Weasley',
      email: 'ron@gryffindor@hogwarts',
      imageUrl:'https://camo.githubusercontent.com/7a22182cae9e758489a9e0492b03cb7c45f79574c156db6a22b1c12e3fd92271/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f736e6170636861742d6c656e732d6173736574732f66316130393139342d663032642d343365642d393262382d3632653834333137396666302f6c656e7353747564696f2f4e73617270726f66696c6569636f6e2e4a5047',
      check: false
    },
    {
      id: 3,
      name:'Hermoine Granger',
      email: 'hermoine@gryffindor@hogwarts',
      imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/NATALIESUTO_Profile-Natalie-Suto.JPG',
      check: false
    },
    {
      id: 4,
      name: 'Draco Malfoy',
      email: 'draco@slytherin.hogwarts',
      imageUrl:'https://camo.githubusercontent.com/7a22182cae9e758489a9e0492b03cb7c45f79574c156db6a22b1c12e3fd92271/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f736e6170636861742d6c656e732d6173736574732f66316130393139342d663032642d343365642d393262382d3632653834333137396666302f6c656e7353747564696f2f4e73617270726f66696c6569636f6e2e4a5047',
      check: false
    }
  ];

  ngOnInit() {
  }
onClick(){
this.appservice.nav.navigateForward('profile');
}
home(){
this.appservice.nav.navigateBack('home');
}
}
