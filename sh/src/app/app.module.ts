import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [ // c, d, p
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectiveComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],//guards & services
  bootstrap: [AppComponent]
})
export class AppModule { }
