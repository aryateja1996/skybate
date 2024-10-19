import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyhackComponent } from './skyhack.component';

describe('SkyhackComponent', () => {
  let component: SkyhackComponent;
  let fixture: ComponentFixture<SkyhackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyhackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyhackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
