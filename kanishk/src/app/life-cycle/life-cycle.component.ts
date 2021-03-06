import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  fname: any = '';
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }


  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  
  
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }


  //never use the below functions 
  // it will effect the performance of the application.
  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  
}
