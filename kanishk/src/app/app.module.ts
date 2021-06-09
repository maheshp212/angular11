import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

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
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApiComponent } from './api/api.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MyCustomPaginatorIntl} from './intro/intro.component';

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
    FormsComponent,
    LifeCycleComponent,
    ApiComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}], //service
  bootstrap: [AppComponent]
})
export class AppModule { }
