import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      console.log(res);
    })
  }

}
