import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data={
    username:"",
  password:""
  }

  constructor(
    private loginServive: LoginService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.loginServive.login(this.data).toPromise().then(data => {
      if(data){
        if(data.token){
          localStorage.setItem('token',data.token);
          localStorage.setItem('name',data.name);
          localStorage.setItem('id',data.user_id);
          this.router.navigate(['/demo']);
        }
      }
    });
  }

}
