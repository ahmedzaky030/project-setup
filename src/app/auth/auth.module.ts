import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, ChangePasswordComponent, SignupComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
