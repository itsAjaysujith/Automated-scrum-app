import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesAndPointsComponent } from './stories-and-points.component';

const routes: Routes = [{ path: '', component: StoriesAndPointsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesAndPointsRoutingModule { }
