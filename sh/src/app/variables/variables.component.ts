import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  fname:string;
  age:number =34;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {tech:'anuglar', exp:9};
  gender:boolean = true;
  interest:null = null;
  undf:any;

  a:number = 2;
  b:number = 3;
  c:string = '3';


  constructor() { }

  ngOnInit(): void {
    this.fname = 'angular';
  }
}
