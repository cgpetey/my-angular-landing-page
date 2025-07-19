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
    { text: 'Rules of Conduct', url: 'https://app-dev.membersports.com/rules-of-conduct' },
    { text: 'Privacy Policy', url: 'https://app-dev.membersports.com/privacy-policy' },
    { text: 'About Us', url: 'https://app-dev.membersports.com/about-us' },
    { text: 'FAQ', url: 'https://app-dev.membersports.com/faq' },
    { text: 'Website Feedback', url: 'https://app-dev.membersports.com/contact-us' } // Assuming this is your contact link
  ];

  // onLinkClick method is still useful for tracking or other logic,
  // but the primary navigation will be via href.
  onLinkClick(linkItem: { text: string, url: string }): void {
    console.log('Footer link clicked:', linkItem.text);
    // You could still add custom logic here before the browser navigates
    // For example, sending analytics events.
  }
}