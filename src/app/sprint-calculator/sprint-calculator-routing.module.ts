import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintCalculatorComponent } from './sprint-calculator.component';

const routes: Routes = [{ path: '', component: SprintCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintCalculatorRoutingModule { }
