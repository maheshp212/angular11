import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  a:number =2;
  b:number =3;
  fname:string = ' kanishk malhotra';
  age:number = 34;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name: 'kanishk', tech:'angular'};
  interest:null = null;
  gender:boolean = true;
  undefined:any;

  constructor() { }

  ngOnInit(): void {
  }

}
