import { Routes } from '@angular/router';
import { SignUPComponent } from './sign-up/sign-up.component';
import { Signup2Component } from './signup2/signup2.component';
import {SignupLoginComponent} from './signup-login/signup-login.component'
import { Signup3Component } from './signup3/signup3.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

export const routes: Routes = [
    { path: 'signup-login', component: SignupLoginComponent },
    { path: 'sign-up', component: SignUPComponent },
    { path: 'signup2', component: Signup2Component },
    { path: 'signup3', component: Signup3Component },
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component },

    { path: '', redirectTo: '/signup-login', pathMatch: 'full' }
];
