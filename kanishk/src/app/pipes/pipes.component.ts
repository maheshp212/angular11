import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'KaNiShk MaLHoTrA';

  age = 34;

  today = new Date();

  user = {name: 'kanishk', tech:'angular'};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      console.log(res);
    })
  }

}
