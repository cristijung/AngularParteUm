import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilhoComponent } from "../filho/filho.component";

@Component({
    selector: 'app-pai',
    standalone: true,
    templateUrl: './pai.component.html',
    styleUrl: './pai.component.css',
    imports: [CommonModule, FilhoComponent]
})
export class PaiComponent {
  mensagemParaFilho = 'Olá, componente Filho!';

  ngOnInit() {
    this.mensagemParaFilho = 'Olá, componente filho!';
  }

}
