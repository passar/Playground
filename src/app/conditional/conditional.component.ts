import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {
  isLoggedIn = false;
  constructor() { }

  ngOnInit() {
  }

  showLogin() {
    this.isLoggedIn = true;
  }

}
