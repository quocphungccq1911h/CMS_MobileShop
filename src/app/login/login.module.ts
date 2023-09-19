import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { loginRoute } from './../login/login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(loginRoute)],
})
export class LoginModule {}
