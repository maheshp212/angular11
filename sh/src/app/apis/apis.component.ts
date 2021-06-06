import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [PostsService]
})
export class ApisComponent implements OnInit {

  postsList:any

  postres:any;
  constructor(private posts:PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.posts.getPosts().subscribe((res) => {
      this.postsList = res;
    },(err) => {
      console.log(err)
    })
  }

  view(id){
    this.posts.getSinglepost(id).subscribe((res)=>{
      console.log('single view success')
      this.postres = res;
    },(err)=>{
      console.log('single view err')
      this.postres = err;
    })
  }
  create(){
    
    this.posts.createPost().subscribe((res)=>{
      console.log('create success')
      this.postres = res;
      this.getPosts();
    },(err)=>{
      console.log('create err')
      this.postres = err;
    })
  }
  edit(id){
    this.posts.updatePost(id).subscribe((res)=>{
      console.log('edit success')
      this.postres = res;
      this.getPosts();
    },(err)=>{
      console.log('edit err')
      this.postres = err;
    })

  }

  deletePost(id){
    this.posts.deletePost(id).subscribe((res)=>{
      console.log('delete success')
      this.postres = res;
      this.getPosts();
    },(err)=>{
      console.log('detele err')
      this.postres = err;
    })

  }
}
