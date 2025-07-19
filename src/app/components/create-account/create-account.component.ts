import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  @Output() createAccountCancel = new EventEmitter<void>();
  
  private fb = inject(FormBuilder);
  
  createAccountForm: FormGroup;
  isLoading = false;
  showPassword = false;
  showConfirmPassword = false;

  constructor() {
    this.createAccountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobilePhone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onCreateAccount(): void {
    if (this.createAccountForm.valid) {
      this.isLoading = true;
      console.log('Create account attempt:', this.createAccountForm.value);
      
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        // Handle success - maybe emit event or navigate
      }, 2000);
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.createAccountForm.reset();
    this.isLoading = false;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.createAccountCancel.emit();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
} 