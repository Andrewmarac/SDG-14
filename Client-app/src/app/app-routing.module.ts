import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdg14Component } from './sdg14/sdg14.component';
import { TgchartsComponent } from './tgcharts/tgcharts.component';

const routes: Routes = [
  {path:'sdg14', component:Sdg14Component},
  {path:'tgcharts', component:TgchartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
