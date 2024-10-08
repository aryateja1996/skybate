import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailPageComponent } from './fail-page.component';

describe('FailPageComponent', () => {
  let component: FailPageComponent;
  let fixture: ComponentFixture<FailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
