import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {
  socias = [
    {
      nome: 'Sandra Cristina',
      desc: 'Contadora com mais de 13 anos de experiência na área contábil e fiscal. Co-fundadora da Bertis.',
      foto: 'assets/sandra-sentada.jpeg' // Substitua pelo caminho da sua imagem
    },
    {
      nome: 'Beatriz Lima',
      desc: 'Especialista em tributos e planejamento tributário, co-fundadora da Bertis com mais de 10 anos de experiência.',
      foto: 'assets/bia-em-pe.jpeg' // Substitua pelo caminho da sua imagem
    }
  ];
}