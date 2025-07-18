import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgPathsService } from '../../services/svg-paths.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  private svgPathsService = inject(SvgPathsService);

  getMsLogoPath(): string {
    return this.svgPathsService.getSvgPath('pe07c4f0');
  }

  getMemberSportsPath(pathKey: string): string {
    return this.svgPathsService.getSvgPath(pathKey);
  }

  get memberSportsPaths() {
    return {
      p45d8c80: this.getMemberSportsPath('p45d8c80'),
      p1b6a48f2: this.getMemberSportsPath('p1b6a48f2'),
      p261eec00: this.getMemberSportsPath('p261eec00'),
      p26d4c340: this.getMemberSportsPath('p26d4c340'),
      p5a91800: this.getMemberSportsPath('p5a91800'),
      p2752de30: this.getMemberSportsPath('p2752de30'),
      p281df200: this.getMemberSportsPath('p281df200'),
      p30fe8f80: this.getMemberSportsPath('p30fe8f80'),
      p235ef700: this.getMemberSportsPath('p235ef700'),
      p39dee340: this.getMemberSportsPath('p39dee340'),
      p454a280: this.getMemberSportsPath('p454a280'),
      p1351a7f2: this.getMemberSportsPath('p1351a7f2')
    };
  }
} 