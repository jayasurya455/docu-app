import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SharedModule } from '../shared/shared.module';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    LandingComponent,
    NavigationBarComponent,
    CardsContainerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TabViewModule
  ]
})
export class HomeModule { }
