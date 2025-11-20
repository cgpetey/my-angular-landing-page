import { Component, inject, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgPathsService } from '../../services/svg-paths.service';
import { BackgroundSelectorComponent } from '../background-selector/background-selector.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, BackgroundSelectorComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent implements OnInit {
  @Output() loginClick = new EventEmitter<void>();
  showBackgroundSelector = false;
  
  private svgPathsService = inject(SvgPathsService);

  onLoginClick(): void {
    this.loginClick.emit();
  }

  onMLogoClick(event: MouseEvent): void {
    event.stopPropagation();
    this.showBackgroundSelector = !this.showBackgroundSelector;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.background-selector-container')) {
      this.showBackgroundSelector = false;
    }
  }

  getMsLogoPath(): string {
    return this.svgPathsService.getSvgPath('pe07c4f0');
  }

  getMemberSportsPath(pathKey: string): string {
    return this.svgPathsService.getSvgPath(pathKey);
  }

  // This property will hold the paths, initialized once.
  memberSportsPaths: Record<string, string> = {};

  ngOnInit(): void {
    const pathKeys = [
      'p45d8c80', 'p1b6a48f2', 'p261eec00', 'p26d4c340', 'p5a91800',
      'p2752de30', 'p281df200', 'p30fe8f80', 'p235ef700', 'p39dee340',
      'p454a280', 'p1351a7f2'
    ];

    // Build the paths object once on initialization
    pathKeys.forEach(key => {
      this.memberSportsPaths[key] = this.getMemberSportsPath(key);
    });
  }
} 