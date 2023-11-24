import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  title = 'Primeiro Componente';
  stitle = 'Anatomia do Componente Angular';
  legenda = 'A nova versão do Angular contempla várias mudanças significativas';
  image = '../../assets/logo-angular.png'
  alt = 'Nova marca do Angular';

}

