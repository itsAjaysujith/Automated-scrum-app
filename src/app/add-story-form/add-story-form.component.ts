import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story-form',
  templateUrl: './add-story-form.component.html',
  styleUrls: ['./add-story-form.component.scss']
})
export class AddStoryFormComponent implements OnInit {
stories:any=[]
storyAndPoints!: FormGroup

  constructor(private route:Router,private dataService:DataService,private fb:FormBuilder) { 
    this.storyAndPoints = this.fb.group({

      story: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      point: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
    
    })
  }

  ngOnInit(): void {
    this.stories=localStorage.getItem('stories') ? JSON.parse(localStorage.getItem('stories') || '') : []
    
  }

  addStories(){
  if(this.storyAndPoints.valid){
    let storyData=localStorage.getItem('stories') ? JSON.parse(localStorage.getItem('stories') || '') : []
     console.log(storyData,'sdfs');
     
      const result = storyData.find((n:any) =>n.stories == this.storyAndPoints.value.story)
      console.log(result);
      if(!result){
        // this.storyAndPoints.push({story:this.story,points:this.points})
        this.stories.push({"stories":this.storyAndPoints.value.story,"points":this.storyAndPoints.value.point})
        localStorage.setItem('stories',JSON.stringify(this.stories))
        alert('story added successfully')
        this.route.navigateByUrl('/stories')
  
      }else{
        alert('story already exist')
      }
  }
     
 

    

    

  }

}
