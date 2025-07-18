import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.css'
})
export class CardTitleComponent {
  @Input() className: string = '';

  get cardTitleClasses(): string {
    const baseClasses = 'leading-none';
    return `${baseClasses} ${this.className}`;
  }
} 