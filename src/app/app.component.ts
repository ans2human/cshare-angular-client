import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cshare-cml-client';
  token;
  name;

  constructor(){
    this.token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');

  }
}
