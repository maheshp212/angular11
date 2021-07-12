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
  date:any;
  phone:any;
  constructor() { }

  ngOnInit(): void {
  }

}
