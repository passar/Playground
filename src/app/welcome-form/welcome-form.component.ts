import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css']
})
export class WelcomeFormComponent implements OnInit {
  email: string;
  user: string;
  constructor() { }

  ngOnInit() {
  }

  welcomeSubmit(form: NgForm) {
    this.user = form.value.name;
  }

}
