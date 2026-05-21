import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TargetAudienceComponent } from './components/target-audience/target-audience.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TargetAudienceComponent, ServicesComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <app-target-audience></app-target-audience>
      <app-services></app-services>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 60px;
      @media (max-width: 768px) {
        padding-top: 30px;
      }
    }
  `]
})
export class AppComponent {}