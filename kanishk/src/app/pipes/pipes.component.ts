import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
