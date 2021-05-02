import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {

  user:any ={};

  minDate:any = '2020-11-15';
  maxDate:any= '2021-06-18';

  constructor() { }

  ngOnInit(): void {

  }

  login(){
    console.log(this.user);
    console.log(this.user.fname);
  }

}
