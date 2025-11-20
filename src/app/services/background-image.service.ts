import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundImageService {
  private currentBackground$ = new BehaviorSubject<string>('/CoyoteCreekBG.webp');
  
  // List of available background images - auto-update this when adding new images
  private availableBackgrounds: string[] = [
    '/CoyoteCreekBG.webp',
    '/FoxHollowBG.webp',
    '/HomesteadBG.webp'
  ];

  constructor() {
    // Auto-detect background images by trying to load them
    this.detectAvailableBackgrounds();
  }

  /**
   * Get the current background image URL
   */
  getCurrentBackground(): Observable<string> {
    return this.currentBackground$.asObservable();
  }

  /**
   * Get the current background image URL synchronously
   */
  getCurrentBackgroundValue(): string {
    return this.currentBackground$.value;
  }

  /**
   * Set a new background image
   */
  setBackground(imagePath: string): void {
    if (this.availableBackgrounds.includes(imagePath)) {
      this.currentBackground$.next(imagePath);
    }
  }

  /**
   * Get list of available background images
   */
  getAvailableBackgrounds(): string[] {
    return [...this.availableBackgrounds];
  }

  /**
   * Get display name for a background image
   */
  getDisplayName(imagePath: string): string {
    // Convert '/CoyoteCreekBG.webp' to 'Coyote Creek'
    const name = imagePath
      .replace('/public/', '')
      .replace('/BG.webp', '')
      .replace('.webp', '')
      .replace(/([A-Z])/g, ' $1')
      .trim();
    return name || imagePath;
  }

  /**
   * Auto-detect available background images by checking common patterns
   */
  private detectAvailableBackgrounds(): void {
    // In a real app, you might want to fetch a manifest or use an API
    // For now, we'll rely on the hardcoded list, but you can extend this
    // to check for images dynamically if needed
  }

  /**
   * Add a new background image to the list (useful for dynamic discovery)
   */
  addBackground(imagePath: string): void {
    if (!this.availableBackgrounds.includes(imagePath)) {
      this.availableBackgrounds.push(imagePath);
    }
  }
}

