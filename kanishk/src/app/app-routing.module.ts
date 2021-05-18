import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { KanishkComponent } from './kanishk/kanishk.component';
import { VariablesComponent } from './variables/variables.component';
import {PipesComponent} from './pipes/pipes.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"intro", component: IntroComponent},
  {path:"varrrrr", component: VariablesComponent},
  {path:"kanishk", component: KanishkComponent},
  {path:"dir", component: DirectiveComponent},
  {path:"pipes", component: PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
