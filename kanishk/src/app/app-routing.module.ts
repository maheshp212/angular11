import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { KanishkComponent } from './kanishk/kanishk.component';
import { VariablesComponent } from './variables/variables.component';
import {PipesComponent} from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApiComponent } from './api/api.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", component: HomeComponent}, // if path is empty it will become landing page.
  {path:"intro", component: IntroComponent},
  {path:"varrrrr", component: VariablesComponent},
  {path:"kanishk/:category/:brand/:name/:id", component: KanishkComponent}, // Dynamic Urls
  {path:"dir", component: DirectiveComponent},
  {path:"pipes/:id", component: PipesComponent},
  {path:"forms", component: FormsComponent},
  {path:"life", component: LifeCycleComponent},
  {path:"api", component: ApiComponent},
  {path:"**", component: NotfoundComponent}, // ** is for 404 pages, this should be always at the bottom,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
