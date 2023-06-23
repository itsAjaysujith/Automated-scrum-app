import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-and-points',
  templateUrl: './stories-and-points.component.html',
  styleUrls: ['./stories-and-points.component.scss']
})
export class StoriesAndPointsComponent implements OnInit {
  stories: any;

  constructor() { }

  ngOnInit(): void {

    this.stories=localStorage.getItem('stories')  ? JSON.parse(localStorage.getItem('stories') || '') : []
    console.log(this.stories);
    
  }

}
