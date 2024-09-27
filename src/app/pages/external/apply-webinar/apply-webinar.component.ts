import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-webinar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apply-webinar.component.html',
  styleUrl: './apply-webinar.component.css'
})
export class ApplyWebinarComponent {
  constructor(private apiService: ApiService,private router : Router){

    console.log(" The Url : ", this.router.url);
    
    }
  participant = {
    userId : '',
    amount : 0,
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    session: 'morning',
    interest: '',
    requirements: '',
  };
/**
 * {
  "userId":"HELLO123",
  "amount":1,
  "phoneNumber":9963028580
}
 */
  onSubmit() {
    this.participant.userId = `FlutterUser${this.participant.session}`;
    this.participant.amount = 100;
    this.apiService.paymentForFlutter(this.participant).subscribe((res)=>{
      console.log(res);
      const responce  = res as any;
      window.location.href = responce['redirectUrl']
      
    })

  }
}