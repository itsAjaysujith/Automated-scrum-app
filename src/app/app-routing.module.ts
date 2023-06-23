import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'addstoryform',pathMatch:'full'},
  { path: 'addstoryform', loadChildren: () => import('./add-story-form/add-story-form.module').then(m => m.AddStoryFormModule) },
  { path: 'stories', loadChildren: () => import('./stories-and-points/stories-and-points.module').then(m => m.StoriesAndPointsModule) },
  { path: 'sprint-calculator', loadChildren: () => import('./sprint-calculator/sprint-calculator.module').then(m => m.SprintCalculatorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
