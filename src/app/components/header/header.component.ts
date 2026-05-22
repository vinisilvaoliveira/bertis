import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Instagram, LucideAngularModule, Phone } from 'lucide-angular';

interface Slide {
  imageClass: string;
  badge: string;
  title: string;
  highlight: string;
  desc: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly icons = { phone: Phone, instagram: Instagram };
  isMenuOpen = false;

  // Índice do slide que está aparecendo na tela
  currentSlide = 0;
  private intervalId: any;

  // Lista de slides com as fotos reais e textos do folder
  slides: Slide[] = [
    {
      imageClass: 'slide-1', // Foto das duas sorrindo na mesa
      badge: 'Assessoria e Contabilidade',
      title: 'Contabilidade que',
      highlight: 'facilita, organiza e faz crescer',
      desc: 'Soluções contábeis modernas, atendimento próximo e tecnologia para '
    },
    {
      imageClass: 'slide-2', // Foto delas em pé com café e notebook
      badge: 'Assessoria e Contabilidade',
      title: 'Contabilidade que',
      highlight: 'facilita, organiza e faz crescer',
      desc: 'Soluções contábeis modernas, atendimento próximo e tecnologia para '
    },
    {
      imageClass: 'slide-3', // Foto delas em pé com café e notebook
      badge: 'Assessoria e Contabilidade',
      title: 'Contabilidade que',
      highlight: 'facilita, organiza e faz crescer',
      desc: 'Soluções contábeis modernas, atendimento próximo e tecnologia para '
    },
    {
      imageClass: 'slide-4', // Foto delas em pé com café e notebook
      badge: 'Assessoria e Contabilidade',
      title: 'Contabilidade que',
      highlight: 'facilita, organiza e faz crescer',
      desc: 'Soluções contábeis modernas, atendimento próximo e tecnologia para '
    }

  ];

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  startCarousel(): void {
    // Troca de slide automaticamente a cada 5 segundos
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  // Permite ao usuário clicar nas bolinhas para mudar de slide manualmente
  setSlide(index: number): void {
    this.currentSlide = index;
    this.stopCarousel(); // Reseta o tempo se o usuário interagir
    this.startCarousel();
  }
}