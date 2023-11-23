import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filho-dois',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho-dois.component.html',
  styleUrl: './filho-dois.component.css'
})
export class FilhoDoisComponent {
  @Output() mensagemEnviada = new EventEmitter<string>();

  enviarMensagem() {
    this.mensagemEnviada.emit('Olá, componente pai! Este é uma mensagem de Pai para Filho');
  }
}
