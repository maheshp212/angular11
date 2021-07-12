import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kanishk',
  templateUrl: './kanishk.component.html',
  styleUrls: ['./kanishk.component.scss']
})
export class KanishkComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      console.log(res);
    })
  }

}
