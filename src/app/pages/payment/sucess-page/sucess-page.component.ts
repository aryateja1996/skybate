import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-sucess-page',
  standalone: true,
  imports: [],
  templateUrl: './sucess-page.component.html',
  styleUrl: './sucess-page.component.css'
})
export class SucessPageComponent {
  orderId: string = "";
  amountPaid: number = 0;
  paymentMethod: string = "";
  paymentData: any = {};
  constructor(private router: Router,private route:ActivatedRoute,private api:ApiService) {}

  ngOnInit(): void {
    const encodedData = this.route.snapshot.queryParamMap.get('data');
    // You can get order details from a service or route data
    // Replace with dynamic data
    if (encodedData) {
      // Decode the base64 data and parse it back into a JavaScript object
      
      console.log(encodedData);
      this.api.getPaymentDetails(encodedData).subscribe((res)=>{
        console.log();
        
        const responnce = res as any;
        this.paymentData = responnce;
        console.log(typeof this.paymentData, this.paymentData.data.transactionId);

    this.orderId = `${this.paymentData.data.transactionId}`;  // Replace with dynamic data
    this.amountPaid = (this.paymentData.data.amount / 100 );    // Replace with dynamic data
    this.paymentMethod = `${this.paymentData.data.paymentInstrument.type}`;
      })
      
    }
  }

  goToHome(): void {
    if (this.paymentData) {
      this.router.navigate(['/home']);
    // window.open("https://chat.whatsapp.com/GaPPKyHqytAAQXcpLuF7vt", '_blank');
    }
  }
}
