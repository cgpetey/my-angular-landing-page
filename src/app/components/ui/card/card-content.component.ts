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

  get contentClasses(): string {
    const baseClasses = 'p-6 pt-0';
    return `${baseClasses} ${this.className}`;
  }
} 