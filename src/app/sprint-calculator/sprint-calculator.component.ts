import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AutoSelectedStoriesComponent } from './auto-selected-stories/auto-selected-stories.component';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent implements OnInit {
  @ViewChild(AutoSelectedStoriesComponent, { static: false }) AutoSelectedStoriesComponent!: AutoSelectedStoriesComponent;
  datas:any=[]
  sprintCapacity: number=0;
  points:any
  @Output() valueChange = new EventEmitter<any>();
  constructor() {
    
   }

  ngOnInit(): void {

    this.datas=JSON.parse(localStorage.getItem('stories') || '')
    this.datas.forEach((data:any) => {
      this.sprintCapacity+=parseInt(data.points)
    })
    
    console.log(this.sprintCapacity,'sprintcapacity');

  }

  sprintPoints(){
   if(this.points<this.sprintCapacity){
  this.valueChange.emit(this.points);
    this.AutoSelectedStoriesComponent.autoSelectStories()

   }else{
    alert(`Selected story points should be below ${this.sprintCapacity}`)
   }
  
  }

  clearSprints(){
    this.points=''
    localStorage.removeItem('autoSelectedStories')
    setTimeout(() => {
      this.AutoSelectedStoriesComponent.autoSelectStories()
    }, 500);
    alert('Cleared Successfully')

  }

  clearStories(){
    this.clearSprints()
    localStorage.removeItem('stories')

  }

}
