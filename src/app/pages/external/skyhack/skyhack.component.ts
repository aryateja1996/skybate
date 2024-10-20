import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-skyhack',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './skyhack.component.html',
  styleUrl: './skyhack.component.css'
})
export class SkyhackComponent {
  registrationForm: FormGroup;
  showForm: boolean = false;
  showTerms: boolean = true;
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      institutionName: ['', Validators.required],
      academicLevel: ['', Validators.required],
      yearOfStudy: ['', Validators.required],
      abstract: [''],
      teamName: ['', Validators.required],
      teamSize: ['', Validators.required],
      teamMembers: this.fb.array([]), // Add dynamic controls for team members
      areaOfInterest: ['', Validators.required],
      skills: [''],
      projectIdea: ['', Validators.required],
      emergencyContact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      termsAgreement: [{ value: false, disabled: true }, Validators.requiredTrue,],
    });
  }
  get teamMembers(): FormArray {
    return this.registrationForm.get('teamMembers') as FormArray;
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.api.saveDetails(this.registrationForm.value, 'skyhack').subscribe((res) => {
        console.log(res);
        const responce = res as any
        if (responce['status'] === 200) {
          this.api.payment({
            "userId": "HELLO123",
            "amount": 1,
            "phone": this.registrationForm.value['mobile']
          }, 'skyhack').subscribe((rest) => {
            const responce = rest as any
            window.location.href = responce['redirectUrl']
          })
        } else {
          console.log("something went wrong");

        }
      })
    } else {
      console.log('Form is invalid');
    }
  }
  agreeToTermsHandle() {
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
  teamSize: number = 0;
  selctTeamSize(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    this.teamSize = Number(selectElement.value);
    console.log(this.teamSize);
    this.teamMembers.clear();

    // Add the required number of form controls for team members
    if (this.teamSize === 1) {
      this.teamMembers.push(
        this.fb.group({
          memberName: [{ value: this.registrationForm.value['fullName'], disabled: true }, Validators.required],
          memberEmail: [{ value: this.registrationForm.value['email'], disabled: true }, [Validators.required, Validators.email]],
          memberMobile: [{ value: this.registrationForm.value['mobile'], disabled: true }, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
          memberYearOfStudy: [{ value: this.registrationForm.value['yearOfStudy'], disabled: true }, Validators.required],
          memberGender: [{ value: this.registrationForm.value['gender'], disabled: true }, Validators.required],
        })
      );
    } else {
      for (let i = 0; i < this.teamSize; i++) {
        if (i == 0) {
          this.teamMembers.push(
            this.fb.group({
              memberName: [{ value: this.registrationForm.value['fullName'], disabled: true }, Validators.required],
              memberEmail: [{ value: this.registrationForm.value['email'], disabled: true }, [Validators.required, Validators.email]],
              memberMobile: [{ value: this.registrationForm.value['mobile'], disabled: true }, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
              memberYearOfStudy: [{ value: this.registrationForm.value['yearOfStudy'], disabled: true }, Validators.required],
              memberGender: [{ value: this.registrationForm.value['gender'], disabled: true }, Validators.required],
            })
          );
        } else {


          this.teamMembers.push(
            this.fb.group({
              memberName: ['', Validators.required],
              memberEmail: ['', [Validators.required, Validators.email]],
              memberMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
              memberYearOfStudy: ['', Validators.required],
              memberGender: ['', Validators.required],
            })
          );
        }
      }
    }
    console.log(this.registrationForm);

  }
}