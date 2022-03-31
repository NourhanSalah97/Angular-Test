import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './component/home-page/home-page.component';
import { TaskmangePageComponent } from './component/taskmange-page/taskmange-page.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'taskmange-page',component:TaskmangePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
