import { Component, OnInit } from '@angular/core';
import {ContactService} from '../service/contact.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  data:any = [];
  data1={
    first_name: '',
    last_name: '',
    email: '',
    phone: "",
    user: localStorage.getItem('id')
  };
  hide = true;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { 
    this.contactService.getData().toPromise().then(data => {
      this.data = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  submit(){
    this.contactService.newData(this.data1).toPromise().then(data => {
      if(data){
        // this.router.navigate(['/demo']);
        this.hide = false;
        this.data.push(data);
      }
    });
  }

  deleteData(id){
    this.contactService.deleteData(id).toPromise().then(data => {
      this.data.forEach(element => {
        if(element.id == id){
          // element.pop();
        }
      });
    })
  }
}
