import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() className: string = '';

  get cardClasses(): string {
    const baseClasses = 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border';
    return `${baseClasses} ${this.className}`;
  }
} 