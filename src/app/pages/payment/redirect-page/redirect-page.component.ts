import { Component } from '@angular/core';
import { ConstantsService } from '../../../utils/constants.service';

@Component({
  selector: 'app-redirect-page',
  standalone: true,
  imports: [],
  templateUrl: './redirect-page.component.html',
  styleUrl: './redirect-page.component.css'
})
export class RedirectPageComponent {
  consts:ConstantsService=new ConstantsService
}
