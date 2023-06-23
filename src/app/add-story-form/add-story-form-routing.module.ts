import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStoryFormComponent } from './add-story-form.component';

const routes: Routes = [{ path: '', component: AddStoryFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStoryFormRoutingModule { }
