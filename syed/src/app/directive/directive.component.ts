import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  fname = "syed";
  fruits = ['apple', 'mango', 'papaya', 'melon'];
  constructor() { }

  ngOnInit(): void {

    this.fruits.forEach(function(x){
      console.log(x);
    })
  }

}
