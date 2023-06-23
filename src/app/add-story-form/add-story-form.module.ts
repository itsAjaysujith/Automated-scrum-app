import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStoryFormRoutingModule } from './add-story-form-routing.module';
import { AddStoryFormComponent } from './add-story-form.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddStoryFormComponent
  ],
  imports: [
    CommonModule,
    AddStoryFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddStoryFormModule { }
