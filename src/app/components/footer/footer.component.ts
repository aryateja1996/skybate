import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConstantsService } from '../../utils/constants.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

emailid = "info@skybate.in";
consts: ConstantsService = new ConstantsService;

constructor(private apiService:ApiService){}

makePayment() {
  const payload = {
  "userId":"HELLO123",
  "amount":1,
  "phoneNumber":9963028580
}
this.apiService.paymentForFlutter(payload).subscribe(res =>{
  console.log(res);
  const responce  = res as any;
  window.location.href = responce['redirectUrl']
})
}

}
