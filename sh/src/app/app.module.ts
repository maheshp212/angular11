import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactivFormsComponent } from './reactiv-forms/reactiv-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { SpreadPipe } from './spread.pipe';
import { PostfixPipe } from './postfix.pipe';

@NgModule({
  declarations: [ // c, d, p
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectiveComponent,
    FormsComponent,
    ObjFormsComponent,
    ReactivFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    SpreadPipe,
    PostfixPipe
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],//guards & services
  bootstrap: [AppComponent]
})
export class AppModule { }
