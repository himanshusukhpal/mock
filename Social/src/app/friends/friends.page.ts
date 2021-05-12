import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit{
  myDate: string = new Date().toISOString();
  filterTerm: string;
  requirement: string;
  display=[];
  userRecords = [{
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    check: 'false'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    check: 'false'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    check: 'false'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    check: 'false'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    check: 'false'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
    check: 'false'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    check: 'false'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    check: 'false'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    check: 'false'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    check: 'false'
  }
];
  constructor() { }


  onCheck(){
    this.userRecords.forEach(i => {
      console.log(i.check,i.id);
    });
  }

  onAddRequirements(form: NgForm){
    this.requirement=form.value.requirement;
    console.log(this.requirement);
    this.display.push(this.requirement);
    console.log(this.display);
    form.reset();
  }
  ngOnInit() {
  }


}
