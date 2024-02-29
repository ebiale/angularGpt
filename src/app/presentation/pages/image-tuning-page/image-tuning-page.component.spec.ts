import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageTuningPageComponent} from './image-tuning-page.component';

describe('ImageTunningPageComponent', () => {
  let component: ImageTuningPageComponent;
  let fixture: ComponentFixture<ImageTuningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTuningPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageTuningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
