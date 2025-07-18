import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerLinks = [
    'Rules of Conduct',
    'Privacy Policy',
    'About Us', 
    'FAQ',
    'Website Feedback'
  ];

  onLinkClick(link: string): void {
    console.log('Footer link clicked:', link);
    // Here you would typically navigate to the respective page
  }
} 