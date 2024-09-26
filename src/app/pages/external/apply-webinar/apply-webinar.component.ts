import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-webinar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apply-webinar.component.html',
  styleUrl: './apply-webinar.component.css'
})
export class ApplyWebinarComponent {
  constructor(private apiService: ApiService){

  }
  participant = {
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    session: 'morning',
    interest: '',
    requirements: '',
    agreeToTerms: false
  };

  onSubmit() {
    if (this.participant.agreeToTerms) {
      // Logic for form submission can go here (e.g., HTTP request to backend)
      console.log('Form Submitted:', this.participant);
      alert('Registration successful!');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  }
}