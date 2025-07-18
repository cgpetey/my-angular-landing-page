import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-footer.component.html',
  styleUrl: './card-footer.component.css'
})
export class CardFooterComponent {
  @Input() className: string = '';

  get cardFooterClasses(): string {
    const baseClasses = 'flex items-center px-6 pb-6 [.border-t]:pt-6';
    return `${baseClasses} ${this.className}`;
  }
} 