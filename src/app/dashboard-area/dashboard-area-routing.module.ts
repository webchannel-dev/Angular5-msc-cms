import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAreaComponent } from './dashboard-area.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardAreaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAreaRoutingModule { }
