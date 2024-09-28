import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router: Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    const encodedData = this.route.snapshot.queryParamMap.get('data');
    // You can get order details from a service or route data
    // Replace with dynamic data
    if (encodedData) {
      // Decode the base64 data and parse it back into a JavaScript object
      this.paymentData = atob(encodedData);
      this.paymentData = JSON.parse(this.paymentData);
      console.log(this.paymentData);
      
    }
    this.orderId = `${this.paymentData.data.transactionId}`;  // Replace with dynamic data
    this.amountPaid = this.paymentData.data.amount;    // Replace with dynamic data
    this.paymentMethod = `${this.paymentData.data.paymentInstrument.type}`;
  }

  goToHome(): void {
    if (this.paymentData) {
      
    window.open("https://chat.whatsapp.com/LkykTbQriPT75VKNaJy6L0", '_blank');
    }
  }
}
