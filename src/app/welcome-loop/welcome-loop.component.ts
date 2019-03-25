import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-loop',
  templateUrl: './welcome-loop.component.html',
  styleUrls: ['./welcome-loop.component.css']
})
export class WelcomeLoopComponent implements OnInit {
  names = [
    { name: 'Max', age: 31, occupation: 'Teacher', description: 'I am a great teacher!', image: 'https://picsum.photos/200/300/?random' },
    // tslint:disable-next-line:max-line-length
    { name: 'Peter', age: 24, occupation: 'Professor', description: 'I give students their future', image: 'https://picsum.photos/200/300/?random' },
    { name: 'Calle', age: 27, occupation: 'Entrepeneur', description: 'I work a lot', image: 'https://picsum.photos/200/300/?random' },
    { name: 'Maddy', age: 22, occupation: 'Student', description: 'I try to learn a lot!', image: 'https://picsum.photos/200/300/?random' },
    // tslint:disable-next-line:max-line-length
    { name: 'Frederik', age: 20, occupation: 'Janitor', description: 'I clean for the future!', image: 'https://picsum.photos/200/300/?random' }
  ];
  constructor() { }

  ngOnInit() {
  }


  welcomePerson(person: string) {
    alert(`Welcome ${person}`);
  }


}
