import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintCalculatorRoutingModule } from './sprint-calculator-routing.module';
import { SprintCalculatorComponent } from './sprint-calculator.component';
import { AutoSelectedStoriesComponent } from './auto-selected-stories/auto-selected-stories.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SprintCalculatorComponent,
    AutoSelectedStoriesComponent
  ],
  imports: [
    CommonModule,
    SprintCalculatorRoutingModule,
    FormsModule
  ]
})
export class SprintCalculatorModule { }
