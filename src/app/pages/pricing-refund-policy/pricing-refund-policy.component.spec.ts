import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingRefundPolicyComponent } from './pricing-refund-policy.component';

describe('PricingRefundPolicyComponent', () => {
  let component: PricingRefundPolicyComponent;
  let fixture: ComponentFixture<PricingRefundPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingRefundPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingRefundPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
