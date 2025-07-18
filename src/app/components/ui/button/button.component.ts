import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'default';
  @Input() size: ButtonSize = 'default';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() className: string = '';
  @Input() loading: boolean = false;

  @Output() click = new EventEmitter<Event>();

  // Map our variants to Angular Material button types
  get matButtonType(): string {
    switch (this.variant) {
      case 'default':
        return 'mat-raised-button';
      case 'outline':
        return 'mat-stroked-button';
      case 'ghost':
      case 'link':
        return 'mat-button';
      case 'destructive':
        return 'mat-raised-button';
      case 'secondary':
        return 'mat-flat-button';
      default:
        return 'mat-raised-button';
    }
  }

  get matButtonColor(): string {
    switch (this.variant) {
      case 'destructive':
        return 'warn';
      case 'secondary':
        return 'accent';
      default:
        return 'primary';
    }
  }

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
    
    // Size classes
    const sizeClasses: Record<ButtonSize, string> = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9'
    };

    // Variant classes (for additional styling beyond Material)
    const variantClasses: Record<ButtonVariant, string> = {
      default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline'
    };

    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${this.className}`;
  }

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.click.emit(event);
    }
  }
} 