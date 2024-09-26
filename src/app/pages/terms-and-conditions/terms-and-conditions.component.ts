import { Component } from '@angular/core';
import { ConstantsService } from '../../utils/constants.service';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {
consts:ConstantsService=new ConstantsService
}
