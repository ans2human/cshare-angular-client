import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
    'Authorization': 'Token ' + token});
    return this.http.get('https://ans2human.pythonanywhere.com/api/v1/contacts/', {headers: httpHeaders});
  }

  newData(data){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
    'Authorization': 'Token ' + token});
    return this.http.post('https://ans2human.pythonanywhere.com/api/v1/contacts/', data,{headers: httpHeaders});
  }

  deleteData(id){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
    {'Content-Type':'application/json; charset=utf-8',
    'Authorization': 'Token ' + token});
    return this.http.delete('https://ans2human.pythonanywhere.com/api/v1/contacts/'+ id, {headers: httpHeaders});
  }

  updateData(data){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
    {'Content-Type':'application/json; charset=utf-8',
    'Authorization': 'Token ' + token});
    return this.http.put('https://ans2human.pythonanywhere.com/api/v1/contacts/'+ data.id + "/", {headers: httpHeaders});
  }

  userList(){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
    'Authorization': 'Token ' + token});
    return this.http.get('https://ans2human.pythonanywhere.com/api/v1/users/', {headers: httpHeaders});
  }

}
