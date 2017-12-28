import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAreaRoutingModule } from './main-area-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MainAreaComponent } from './main-area.component';


@NgModule({
  imports: [
    CommonModule,
    MainAreaRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, ContainerComponent, TopNavComponent, MainAreaComponent]
})
export class MainAreaModule { }
