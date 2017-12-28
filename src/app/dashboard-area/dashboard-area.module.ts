import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAreaRoutingModule } from './dashboard-area-routing.module';
import { DashboardAreaComponent } from './dashboard-area.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardAreaRoutingModule
  ],
  declarations: [DashboardAreaComponent]
})
export class DashboardAreaModule { }
