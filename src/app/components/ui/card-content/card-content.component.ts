import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent {
  @Input() className: string = '';

  get cardContentClasses(): string {
    const baseClasses = 'px-6 [&:last-child]:pb-6';
    return `${baseClasses} ${this.className}`;
  }
} 