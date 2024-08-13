import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup2.component.html',
  styleUrl: './signup2.component.css'
})
export class Signup2Component {
  signup2Form: FormGroup;

  constructor(private router: Router) {
    this.signup2Form = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      Full_Name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      Birth_date: new FormControl("", [Validators.required]),
      City: new FormControl("", [Validators.required]),
      Pincode: new FormControl("", [Validators.required])
    });

    const step1Data = JSON.parse(sessionStorage.getItem('step1Data') || '{}');
    if (step1Data) {
      this.signup2Form.patchValue(step1Data);
    }
  }

  onContinue() {
    if (this.signup2Form.valid) {
      // Save step1 data
      sessionStorage.setItem('step1Data', JSON.stringify(this.signup2Form.value));
      this.router.navigateByUrl('/signup3');
    }
  }
}
