import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-skyhack',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './skyhack.component.html',
  styleUrl: './skyhack.component.css'
})
export class SkyhackComponent {
  registrationForm: FormGroup;
showForm:boolean = false;
showTerms:boolean = true;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      institutionName: ['', Validators.required],
      academicLevel: ['', Validators.required],
      yearOfStudy: ['', Validators.required],
      major: ['', Validators.required],
      teamName: ['', Validators.required],
      teamMembers: this.fb.array([]), // Add dynamic controls for team members
      areaOfInterest: ['', Validators.required],
      skills: ['', Validators.required],
      projectIdea: ['', Validators.required],
      emergencyContact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      termsAgreement: [{value: false, disabled: true}, Validators.requiredTrue,],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  agreeToTermsHandle(){
    this.showForm = true;
    this.showTerms = false;
    this.registrationForm.patchValue({
      termsAgreement: true
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling animation
    });
  }
}