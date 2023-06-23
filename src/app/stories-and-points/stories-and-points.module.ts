import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesAndPointsRoutingModule } from './stories-and-points-routing.module';
import { StoriesAndPointsComponent } from './stories-and-points.component';


@NgModule({
  declarations: [
    StoriesAndPointsComponent
  ],
  imports: [
    CommonModule,
    StoriesAndPointsRoutingModule
  ]
})
export class StoriesAndPointsModule { }
