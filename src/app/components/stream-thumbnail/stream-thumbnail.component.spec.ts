import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamThumbnailComponent } from './stream-thumbnail.component';

describe('StreamThumbnailComponent', () => {
  let component: StreamThumbnailComponent;
  let fixture: ComponentFixture<StreamThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
