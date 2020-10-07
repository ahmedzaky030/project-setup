import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    { path: '' , component: AuthComponent , children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]},
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AuthRoutingModule { }
