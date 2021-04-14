import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  fname:string = 'syed';
  age:number = 40;
  fruits:string[] = ['orange', 'mango', 'munjakaylu'];
  user:any = {tech:'angular', exp: 5};
  gender:boolean = true;
  interest: null = null;
  undf:any;
  
  a = 2;
  b = 3;
  
  constructor() { }

  ngOnInit(): void {
  }

}
