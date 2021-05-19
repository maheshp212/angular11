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
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { RupeePipe } from './rupee.pipe';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [ //Component, Directive , Pipe
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    KanishkComponent,
    DirectiveComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    RupeePipe,
    FormsComponent
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
