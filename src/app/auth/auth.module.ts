import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, ChangePasswordComponent, SignupComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
