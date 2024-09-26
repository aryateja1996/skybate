import { Component } from '@angular/core';
import { ConstantsService } from '../../utils/constants.service';

@Component({
  selector: 'app-pricing-refund-policy',
  standalone: true,
  imports: [],
  templateUrl: './pricing-refund-policy.component.html',
  styleUrl: './pricing-refund-policy.component.css'
})
export class PricingRefundPolicyComponent {
consts:ConstantsService= new ConstantsService;
}
