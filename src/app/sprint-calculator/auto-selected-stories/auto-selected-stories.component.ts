import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-selected-stories',
  templateUrl: './auto-selected-stories.component.html',
  styleUrls: ['./auto-selected-stories.component.scss']
})
export class AutoSelectedStoriesComponent implements OnInit {

  @Input() points:any
  datas: any;
  sprintCapacity:any
  autoSelectedStories: any;

  constructor() {
    this.autoSelectStories()
   
   }

  ngOnInit(): void {
console.log(this.autoSelectedStories,'jkj');

  }

  autoSelectStories(){
    this.autoSelectedStories=localStorage.getItem('autoSelectedStories')?.length ? JSON.parse(localStorage.getItem('autoSelectedStories') || '') : []
   let data=localStorage.getItem('stories') ? JSON.parse(localStorage.getItem('stories') || '') : []
    console.log(data);
    console.log(this.points,'asd');
    let autoStories=data.filter((n:any)=>n.points==this.points)
    if(autoStories){
      autoStories.forEach((item: any) => {
        const isStoryIncluded = this.autoSelectedStories.some((story: any) => story.stories === item.stories);
        if (!isStoryIncluded) {
          this.autoSelectedStories.push({ "stories": item.stories, "points": item.points });
          localStorage.setItem('autoSelectedStories', JSON.stringify(this.autoSelectedStories))
        }else{
          alert('you have already selected this point')
        }
      });
    }
    console.log(this.autoSelectedStories,'adsaddasd');
    
  }

 

}
