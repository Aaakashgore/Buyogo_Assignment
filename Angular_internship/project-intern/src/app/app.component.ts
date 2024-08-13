import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUPComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { Login2Component } from './login2/login2.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUPComponent, Signup2Component, Signup3Component, LoginComponent, Login2Component,SignupLoginComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-intern';
}
