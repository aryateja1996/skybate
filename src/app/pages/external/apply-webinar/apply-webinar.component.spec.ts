import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyWebinarComponent } from './apply-webinar.component';

describe('ApplyWebinarComponent', () => {
  let component: ApplyWebinarComponent;
  let fixture: ComponentFixture<ApplyWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyWebinarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
