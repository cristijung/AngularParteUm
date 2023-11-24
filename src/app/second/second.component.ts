import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidirecionalComponent } from '../bidirecional/bidirecional.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, BidirecionalComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  fontSizePx = 16;

}

