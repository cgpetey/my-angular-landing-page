import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../ui/card/card.component';
import { CardContentComponent } from '../ui/card-content/card-content.component';
import { ButtonComponent } from '../ui/button/button.component';
import { InputComponent } from '../ui/input/input.component';
import { CheckboxComponent } from '../ui/checkbox/checkbox.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent,
    CardContentComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() loginCancel = new EventEmitter<void>();
  @Output() createAccountClick = new EventEmitter<void>();
  
  private fb = inject(FormBuilder);
  
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  isLoading = false;
  showForgotPassword = false;

  constructor() {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });

    this.forgotPasswordForm = this.fb.group({
      emailOrPhone: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log('Login attempt:', this.loginForm.value);
      
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    } else {
      console.log('Form is invalid');
    }
  }

  onForgotPassword(): void {
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      console.log('Forgot password for:', this.forgotPasswordForm.value.emailOrPhone);
      
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showForgotPassword = false;
      }, 2000);
    }
  }

  onCancel(): void {
    this.loginForm.reset();
    this.forgotPasswordForm.reset();
    this.showForgotPassword = false;
    this.isLoading = false;
    this.loginCancel.emit();
  }

  toggleForgotPassword(): void {
    this.showForgotPassword = !this.showForgotPassword;
    this.isLoading = false;
  }

  toggleCreateAccount(): void {
    this.createAccountClick.emit();
  }
} 