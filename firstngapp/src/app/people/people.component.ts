import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  isAddingNewPerson:boolean = false;
 people = [];
  constructor() { }

  ngOnInit() {
    this.people = [
      {
        name:'Magnus Nystrom',
        status:'currently coding',
        website:{
          url:'https://campushallen.se/',
          name:'Training Place'
        },
        bikepage:{
          url:'https://www.canyon.com/en-se/',
          name:'Nice Bikes'
        }
      },
      {
        name:'Ralf Engvall',
        status:'Taking care of baby',
        website: {
          url:'http://www.babyproffsen.se/',
          name: 'Baby grejer'
        }
      }
    ];
  }

onSubmit(newPerson) {
  this.people.push(newPerson);
}

}
