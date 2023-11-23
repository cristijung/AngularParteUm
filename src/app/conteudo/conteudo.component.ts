import { Component, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {
  @Input() nome: string = '';
  @Input() @Optional() idade: number = 25;

  constructor() {}

}
