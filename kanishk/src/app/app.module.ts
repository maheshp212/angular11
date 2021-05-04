import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';

@NgModule({
  declarations: [ //Component, Directive , Pipe
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //service
  bootstrap: [AppComponent]
})
export class AppModule { }