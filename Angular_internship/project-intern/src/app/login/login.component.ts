import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  LoginForm: FormGroup;
  // Email: string = '';
  // password: string = '';
  // errorMessage: string = '';
  // successMessage: string = '';

  constructor(private router: Router) {
    this.LoginForm = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });

    const step1Data = JSON.parse(sessionStorage.getItem('step1Data') || '{}');
    if (step1Data) {
      this.LoginForm.patchValue(step1Data);
    }
  }

  validateCredentials(): boolean {
    sessionStorage.setItem('Email', 'Akash@gmail.com');
    const storedUsername = sessionStorage.getItem('Email');
    sessionStorage.setItem('password', 'Akash123');
    const storedPassword = sessionStorage.getItem('password');

    const inputUsername = this.LoginForm.get('Email')?.value;
    const inputPassword = this.LoginForm.get('password')?.value;
    // console.log(inputUsername);
    // console.log(storedUsername);

    return (storedUsername === inputUsername && storedPassword === inputPassword);
  }

  // onLogin() {
  //   this.validateCredentials(this.Email, this.password).then((isValid) => {
  //     if (isValid) {
  //       this.successMessage = 'Login successful!';
  //       this.errorMessage = '';
  //       // Optionally, navigate to a different route after success
  //       // this.router.navigate(['/dashboard']);
  //     } else {
  //       this.errorMessage = 'Incorrect password. Please try again';
  //       this.successMessage = '';
  //     }
  //   });
  // }

  onContinue() {
    if (this.LoginForm.valid) {
      if (this.validateCredentials()) {

        console.log('Login successful!');
        this.router.navigate(['/login2']);

        // Redirect to the desired page or show success modal
      } else {
        console.log('Login failed. Invalid username or password.');
        console.log(this.validateCredentials());
        // Show an error message
      }
    }
  }

    // if (this.LoginForm.valid) {
    //   debugger;
    //   sessionStorage.setItem('step1Data', JSON.stringify(this.LoginForm.value));

      // const localUsers = sessionStorage.getItem('step1Data');
      // if(localUsers != null){
      //   const users = JSON.parse(localUsers);
      //   const isUserPresent = users.find((user:LoginComponent)=> user.Email == this.LoginForm.Email && user.password == this.LoginForm.password);
      // }

      // this.router.navigate(['/login2']);
  //   }
  // }

  // Simulate an API call to validate credentials

  // validateCredentials(Email: string, password: string): Promise<boolean> {
  //   const mockUsers = [
  //     { Email: 'user@example.com', password: 'password123' },
  //     { Email: '1234567890', password: 'password456' }
  //   ];

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const user = mockUsers.find(
  //         (user) => user.Email === Email && user.password === password
  //       );
  //       resolve(!!user);
  //     }, 1000); // Simulating a delay for an API call
  //   });
  // }
}
