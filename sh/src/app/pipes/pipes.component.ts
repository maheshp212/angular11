import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname:string =  'AnGuLaR TeCh';
  age:number = 453.664;
  today:any = new Date();
  user:any = {name:'angualr', exp:5};

  constructor() { }

  ngOnInit(): void {
  }

}
