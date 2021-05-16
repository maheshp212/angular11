import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    let url = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    return this.http.get(url);
  }

  getSinglepost(id){
    let url = 'http://jsonplaceholder.typicode.com/posts/'+id;
    return this.http.get(url);
  }

  createPost(){
    let url = 'http://jsonplaceholder.typicode.com/posts';
    let data = {
      title: 'sh',
      body: 'sh body',
      userId: 1,
    }
    return  this.http.post(url, data);
  }
  updatePost(id){
    let url = 'http://jsonplaceholder.typicode.com/posts/'+id;
    let data = {
      id: id,
      title: 'updated sh',
      body: 'udpated sh body',
      userId: 1,
    }    
    return  this.http.put(url, data);
  }
  deletePost(id){
    let url = 'http://jsonplaceholder.typicode.com/posts/'+id;
    return this.http.delete(url);
  }
}
