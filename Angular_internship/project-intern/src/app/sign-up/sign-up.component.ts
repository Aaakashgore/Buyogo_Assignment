import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUPComponent {
  signupForm: FormGroup;

  // myimage: string = "assets/images/image.png";

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      Full_Name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });

    const step1Data = JSON.parse(sessionStorage.getItem('step1Data') || '{}');
    if (step1Data) {
      this.signupForm.patchValue(step1Data);
    }
  }

  // ngOnInit() {
  //   this.signupForm = this.fb.group({
  //     Email: ['', [Validators.required, Validators.email]],
  //     Full_Name: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
    
    // const step1Data = JSON.parse(sessionStorage.getItem('step1Data') || '{}');
    // if (step1Data) {
    //   this.signupForm.patchValue(step1Data);
    // }
  // }

  onContinue() {
    if (this.signupForm.valid) {
      // Save step1 data
      sessionStorage.setItem('step1Data', JSON.stringify(this.signupForm.value));
      this.router.navigateByUrl('/signup2');
    }
  }
}
 