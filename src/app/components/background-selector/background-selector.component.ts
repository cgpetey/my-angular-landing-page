import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageService } from '../../services/background-image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-background-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-selector.component.html',
  styleUrl: './background-selector.component.css'
})
export class BackgroundSelectorComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  availableBackgrounds: string[] = [];
  currentBackground = '';
  private subscription?: Subscription;

  constructor(private backgroundService: BackgroundImageService) {}

  ngOnInit(): void {
    this.availableBackgrounds = this.backgroundService.getAvailableBackgrounds();
    this.subscription = this.backgroundService.getCurrentBackground().subscribe(
      bg => this.currentBackground = bg
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  selectBackground(imagePath: string): void {
    this.backgroundService.setBackground(imagePath);
  }

  getDisplayName(imagePath: string): string {
    return this.backgroundService.getDisplayName(imagePath);
  }
}

