import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { KanishkComponent } from './kanishk/kanishk.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //Component, Directive , Pipe
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    KanishkComponent,
    DirectiveComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //service
  bootstrap: [AppComponent]
})
export class AppModule { }
