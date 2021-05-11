
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Activities } from 'src/app/activities/acivities.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _activities: Activities[]=[
    new Activities('Netflix n Chill','https://image.shutterstock.com/image-photo/netflix-chill-home-editorial-260nw-1402991972.jpg'),
    new Activities('House Party','https://i.pinimg.com/originals/63/1b/83/631b83648511a1e90b4c98864226c5ef.jpg'),
    new Activities('Workout','https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png'),
    new Activities('Cleanup','https://future.ipsos.com/wp-content/uploads/2019/06/gen-pop-hero-june-13-2019.jpg'),
    new Activities('Nap','https://us.123rf.com/450wm/decorwithme/decorwithme1809/decorwithme180900245/108770020-sleeping-girl-cartoon-people-character-isolated-illustration-on-white-background-high-quality-compos.jpg?ver=6')
  ];

  private _activities2: Activities[]=[
    new Activities('Netflix Chill','https://image.shutterstock.com/image-photo/netflix-chill-home-editorial-260nw-1402991972.jpg'),
    new Activities('House Party','https://i.pinimg.com/originals/63/1b/83/631b83648511a1e90b4c98864226c5ef.jpg'),
    new Activities('Workout','https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png'),
    new Activities('Cleanup','https://future.ipsos.com/wp-content/uploads/2019/06/gen-pop-hero-june-13-2019.jpg'),
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
