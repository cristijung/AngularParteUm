import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {
  @Input() mensagemDoPai: string = '';

}

