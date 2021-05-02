import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  fname:any;
  lname:any;
  age:any;
  email:any;
  phone:any;
  date:any;

  minDate:any = '2020-11-15';
  maxDate:any= '2021-06-18';

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    //alert('data submitted successfully');
    alert(this.fname +" :: " + this.lname +" ::" + this.age +"::"+ this.email);
  }
}
