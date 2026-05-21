import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importe os ícones específicos corporativos
import { LucideAngularModule, Building, Briefcase, Globe, UserCheck, BarChart3, HelpCircle } from 'lucide-angular';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule], // 2. Adicione o Lucide module aqui
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss'
})
export class TargetAudienceComponent {
  
  // Sugestões de ícones específicos para cada item da BERTIS:
  segments = [
    { 
      // Para Pequenas Empresas (ME/EPP): Ícone de um prédio corporativo limpo
      icon: Building, 
      title: 'MEIs e Microempreendedores', 
      desc: 'Orientação próxima e suporte para crescer e organizar seu negócio' 
    },
    { 
      // Para Profissionais Liberais: Uma pasta de trabalho/portfolio
      icon: Briefcase,
      title: 'Pequenas Empresas (ME E EPP)', 
      desc: 'Contabilidade moderna, relatórios e orientação estratégica para melhores decisões' 
    },
    { 
      // Para Profissionais Liberais: Uma pasta de trabalho/portfolio
      icon: Briefcase, 
      title: 'Profissionais Liberais e Autônomos', 
      desc: 'Praticidade, atendimento humanizado e explicações claras' 
    },
    { 
      // Para Negócios Digitais: Um globo com seta de crescimento
      icon: Globe, 
      title: 'Negócios Digitais', 
      desc: 'Contabilidade ágil e tecnológica, alinhada ao ritmo do digital' 
    },
    { 
      // Outros ícones que podem ser úteis para BERTIS:
      icon: UserCheck, // Para MEIs/Microempreendedores (um usuário com check)
      title: 'Empreendedores sem Tempo para Burocracia',
      desc: 'Processos descomplicados, atendimento rápido e tudo online'
    }
  ];
}