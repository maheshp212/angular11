import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    const headers = {'Authorization': `Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce`};
    var url = 'https://gorest.co.in/public-api/users?page=75';
    return this.http.get(url, { headers: headers });
  }

  getSingelUser(id){
    const headers = {'Authorization': `Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce`};
    var url = 'https://gorest.co.in/public-api/users/'+id;
    return this.http.get(url);
  }

  createUser(){
    const headers = {'Authorization': `Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce`};
    var url = 'https://gorest.co.in/public-api/users/';
    var data = {
      "name": "kanishk",
      "email": "kanishk@gmil.com",
      "status": "Active",
      "gender": "Male",
    };

    return this.http.post(url,data,{ headers: headers });
  }

  updateUser(id){
    const headers = {'Authorization': `Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce`};
    var url = 'https://gorest.co.in/public-api/users/'+id;
    var data = {
      "name": "kanishk",
      "email": "kanishk345@gmil.com",
      "status": "Active",
      "gender": "Male",
    };
    return this.http.put(url,data,{ headers: headers });
  }

  deleteUser(id){
    const headers = {'Authorization': `Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce`};
    
    var url = 'https://gorest.co.in/public-api/users/'+id;
    return this.http.delete(url,{ headers: headers });
  }
}
