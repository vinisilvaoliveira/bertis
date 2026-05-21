import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  FileText, 
  Calculator, 
  TrendingUp, 
  DollarSign 
} from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  // Mapeamento dos ícones para serem renderizados no HTML sem erros de compilação
  readonly icons = {
    fileText: FileText,
    calculator: Calculator,
    trendingUp: TrendingUp,
    dollarSign: DollarSign
  };
}