import { Component } from '@angular/core';
import { ConstantsService } from '../../utils/constants.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
email = 'info@skybate.in';
consts:ConstantsService=new ConstantsService
}
