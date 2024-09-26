import { Component } from '@angular/core';
import { ConstantsService } from '../../utils/constants.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  consts:ConstantsService=new ConstantsService
}
