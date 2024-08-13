import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.css'
})
export class SignupLoginComponent {
  step1Form: FormGroup;

  constructor(private router: Router) {
    this.step1Form = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      phone_no: new FormControl("", [Validators.required, Validators.maxLength(10)])
    });
  }

  // ngOnInit() {
  //   this.step2Form = this.fb.group({
  //     Email: ['', [Validators.required, Validators.email]],
  //     phone_no: ['', Validators.required, Validators.maxLength(10)]
  //   });
  // }

  validateCredentials(): boolean {
    sessionStorage.setItem('Email', 'Akash@gmail.com');
    const storedUsername = sessionStorage.getItem('Email');
    sessionStorage.setItem('phone_no', '1234567890');
    const storedPassword = sessionStorage.getItem('phone_no');

    const inputUsername = this.step1Form.get('Email')?.value;
    const inputPassword = this.step1Form.get('phone_no')?.value;
    // console.log(inputUsername);
    // console.log(storedUsername);

    return (storedUsername === inputUsername && storedPassword === inputPassword);
  }

  onContinue() {
    // if (this.step1Form.valid) {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.router.navigate(['/signup']);
    // }
    if (this.step1Form.valid) {
      if (this.validateCredentials()) {

        console.log('Login successful!');
        this.router.navigate(['/login']);
        console.log("User is Already Exists!")
        // Redirect to the desired page or show success modal
      } else {
        console.log('Login failed. Invalid username or password.');
        this.router.navigate(['/sign-up']);
        console.log("New User, Please Signup!")
        // console.log(this.validateCredentials());
        // Show an error message
      }
    }
  }
}
