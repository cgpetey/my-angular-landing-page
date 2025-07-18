import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-action.component.html',
  styleUrl: './card-action.component.css'
})
export class CardActionComponent {
  @Input() className: string = '';

  get cardActionClasses(): string {
    const baseClasses = 'col-start-2 row-span-2 row-start-1 self-start justify-self-end';
    return `${baseClasses} ${this.className}`;
  }
} 