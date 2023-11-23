import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilhoComponent } from '../filho/filho.component';
import { FilhoDoisComponent } from '../filho-dois/filho-dois.component';

@Component({
  selector: 'app-pai',
  standalone: true,
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css',
  imports: [CommonModule, FilhoComponent, FilhoDoisComponent],
})
export class PaiComponent {
  mensagemParaFilho = 'Olá, componente Filho!';

  //hook para ciclo de vida
  ngOnInit() {
    this.mensagemParaFilho = 'Olá, componente filho!';
  }

  //para receber mensagem do componete filho dois
  mensagemRecebidaDoFilho: string = '';

  receberMensagem(mensagem: string) {
    this.mensagemRecebidaDoFilho = mensagem;
  }
}
