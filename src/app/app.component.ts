import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
//import { FooterComponent } from './components/footer/footer.component';
import { LocationTextComponent } from './components/location-text/location-text.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MainHeaderComponent,
    LoginFormComponent,
    CreateAccountComponent,
    //FooterComponent,
    LocationTextComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-landing-page';
  backgroundImageUrl = '/CoyoteCreekBG.webp';
  showLoginForm = false;
  showCreateAccount = false;

  onLoginClick(): void {
    this.showLoginForm = true;
    this.showCreateAccount = false;
  }

  onLoginCancel(): void {
    this.showLoginForm = false;
    this.showCreateAccount = false;
  }

  onCreateAccountClick(): void {
    this.showLoginForm = false;
    this.showCreateAccount = true;
  }

  onCreateAccountCancel(): void {
    this.showCreateAccount = false;
    this.showLoginForm = true;
  }
}
