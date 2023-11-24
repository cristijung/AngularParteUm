import { Component, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {
  @Input() nome: string = '';
  @Input() @Optional() idade: number = 25;

  constructor() {}

}


