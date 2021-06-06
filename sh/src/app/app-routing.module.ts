import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisComponent } from './apis/apis.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactivFormsComponent } from './reactiv-forms/reactiv-forms.component';
import { VariablesComponent } from './variables/variables.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, // empty means home page / landing page
  {path:'intro', component:IntroComponent},
  {path:'var/:age/:name/:tech', component:VariablesComponent},//passing dynamic data through the varibales
  {path:'dirrtrytry', component:DirectiveComponent},
  {path:'forms', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'reactive-forms', component:ReactivFormsComponent},
  {path:'pipes/:id', component:PipesComponent},
  {path:'life-cycle', component:LifeCycleComponent},
  {path:'api', component:ApisComponent},
  {path:'**', component:NotfoundComponent}, //404 pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
