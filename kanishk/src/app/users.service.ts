import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    var url = 'https://reqres.in/api/users';
    return this.http.get(url);
  }

  getSingelUser(id){
    var url = 'https://reqres.in/api/users/'+id;
    return this.http.get(url);
  }

  createUser(){
    var url = 'https://reqres.in/api/users';
    var data = {
      "name": "morpheus",
      "job": "leader"
    };

    return this.http.post(url,data);
  }

  updateUser(id){
    var url = 'https://reqres.in/api/users/'+id;
    var data = {
      "name": "morpheus",
      "job": "mahesh"
    };
    return this.http.post(url,data);
  }

  deleteUser(id){
    var url = 'https://reqres.in/api/users/'+id;
    return this.http.delete(url);
  }
}
