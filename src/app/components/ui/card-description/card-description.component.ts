import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.css'
})
export class CardDescriptionComponent {
  @Input() className: string = '';

  get cardDescriptionClasses(): string {
    const baseClasses = 'text-muted-foreground';
    return `${baseClasses} ${this.className}`;
  }
} 