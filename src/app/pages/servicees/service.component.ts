import { Component } from '@angular/core';
import { ConstantsService } from '../../utils/constants.service';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  consts: ConstantsService = new ConstantsService;
constructor(){}
}
