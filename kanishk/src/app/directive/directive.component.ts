import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  fname:string = 'kanishk';
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  
  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }

}
