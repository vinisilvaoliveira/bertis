import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Phone, Instagram } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  instagramBertis = '@bertiscontabil'
  // Define o mapeamento exato usando os objetos reais da biblioteca
  readonly icons = {
    phone: Phone,
    instagram: Instagram
  };
}