import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomInvoiceComponent } from './mom-invoice.component';

describe('MomInvoiceComponent', () => {
  let component: MomInvoiceComponent;
  let fixture: ComponentFixture<MomInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
