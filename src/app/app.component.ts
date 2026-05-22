import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TargetAudienceComponent } from './components/target-audience/target-audience.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, QuemSomosComponent, TargetAudienceComponent, ServicesComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <app-quem-somos></app-quem-somos>
      <app-target-audience></app-target-audience>
      <app-services></app-services>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    // main {
    //   max-width: 1200px;
    //   margin: 0 auto;
    // }
  `]
})
export class AppComponent {}