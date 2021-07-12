import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  providers: [UsersService]
})
export class ApiComponent implements OnInit {

  usersList:any;
  userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.user.getUsers().subscribe((res:any)=>{
      //success
      this.usersList = res.data;
      console.log(res);
    },(err)=>{
      //failure
    })

  }
  createUser(){
    this.user.createUser().subscribe((res)=>{
      this.userInfo = res;
      this.getUsers();
    },(err)=>{

    })
  }
  viewUser(id){
    this.user.getSingelUser(id).subscribe((res)=>{
      this.userInfo = res;
    },(err)=>{

    })
  }
  editUser(id){
    this.user.updateUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.getUsers();
    },(err)=>{

    })
  }
  deleteUser(id){
    this.user.deleteUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.getUsers();
    },(err)=>{

    })
  }

}
