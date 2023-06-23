import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesAndPointsComponent } from './stories-and-points.component';

describe('StoriesAndPointsComponent', () => {
  let component: StoriesAndPointsComponent;
  let fixture: ComponentFixture<StoriesAndPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesAndPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesAndPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
