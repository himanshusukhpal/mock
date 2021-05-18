/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Activities } from 'src/app/activities/acivities.model';
import { Friends } from 'src/app/friends/friends.model';
import { Locations } from 'src/app/friends/location.model';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _activities: Activities[]=[
    new Activities('Netflix n Chill','https://image.shutterstock.com/image-photo/netflix-chill-home-editorial-260nw-1402991972.jpg',1),
    new Activities('House Party','https://i.pinimg.com/originals/63/1b/83/631b83648511a1e90b4c98864226c5ef.jpg',2),
    new Activities('Workout','https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png',3),
    new Activities('Cleanup','https://future.ipsos.com/wp-content/uploads/2019/06/gen-pop-hero-june-13-2019.jpg',4),
    new Activities('Nap','https://us.123rf.com/450wm/decorwithme/decorwithme1809/decorwithme180900245/108770020-sleeping-girl-cartoon-people-character-isolated-illustration-on-white-background-high-quality-compos.jpg?ver=6',5)
  ];

  private _activities2: Activities[]=[
    new Activities('Watch a Movie','https://s.abcnews.com/images/Lifestyle/WireAP_4e06c47257e74d629e0eeb949752f7be_16x9_992.jpg',6),
    new Activities('Clubbing','https://st2.depositphotos.com/1594308/10494/i/600/depositphotos_104945140-stock-photo-people-dancing-at-party.jpg',7),
    new Activities('Hiking','https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528',8),
    new Activities('Biking','https://cf.bstatic.com/data/xphoto/1182x887/228/22858255.jpg?size=S',9),
  ];

  userRecords: Friends[]= [{
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
    email: 'draco@slythering.hogwarts',
    imageUrl:'https://camo.githubusercontent.com/7a22182cae9e758489a9e0492b03cb7c45f79574c156db6a22b1c12e3fd92271/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f736e6170636861742d6c656e732d6173736574732f66316130393139342d663032642d343365642d393262382d3632653834333137396666302f6c656e7353747564696f2f4e73617270726f66696c6569636f6e2e4a5047',
    check: false
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/NATALIESUTO_Profile-Natalie-Suto.JPG',
    check: false
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qeT1hHprkUJ72gSkkoPDvG-HlRLIzMFBsipyIKPG0xMrFlkIWafXRMkdBh9-KUGHWLo&usqp=CAU',
    check: false
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/NATALIESUTO_Profile-Natalie-Suto.JPG',
    check: false
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2tNhx3wmlEjtL-A_fug0CcwJ8WKwBsOSQ2H8dGyrAL_cxTl-xViAWrwLIu_WM-S2FFY&usqp=CAU',
    check: false
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qeT1hHprkUJ72gSkkoPDvG-HlRLIzMFBsipyIKPG0xMrFlkIWafXRMkdBh9-KUGHWLo&usqp=CAU',
    check: false
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    imageUrl:'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/NATALIESUTO_Profile-Natalie-Suto.JPG',
    check: false
  }
];


location: Locations[]=[
  {
    id:1,
    address:'Your Address'
    },

    {
      id:2,
      address:'Your Address'
    },
    {
      id:3,
      address:'Your Address'
      },
      {
        id:4,
        address:'Your Address'
      },
      {
        id:5,
        address:'Your Address'
      },
      {
        id:6,
        address:'Carnival Cinemas.Rave 3 Mall, Rawatpur'
      },
      {
        id:6,
        address:'Miraj Cinemas, Gurdev, Lakhanpur'
      },
      {
        id:6,
        address:'CineMax ,South X Mall,Kidwai Nagar'
      },
      {
        id:7,
        address:'The Yacht Club,Allenganj,Swaroop Nagar'
      },
      {
        id:7,
        address:'Forest 91 Club, NH 91 Bypass '
      },
      {
        id:7,
        address:'Offline Cafe,Khalasi Lines,Tilak Nagar'
      },
      {
        id:8,
        address:'Kargil Park,Motijheel,Colonelganj'
      },
      {
        id:8,
        address:'Sudhanshu Ashram,Bithoor'
      },
      {
        id:8,
        address:'Blue World Theme Park,Bithoor Road'
      },
      {
        id:9,
        address:'Ganga Bairaj Road,Nawabgunj'
      },
      {
        id:9,
        address:'Bithoor Road, Bithoor'
      },

];


  constructor() { }

  getActivities()
  {
    return [...this._activities];
  }


  getActivities2()
  {
    return [...this._activities2];
  }

}
