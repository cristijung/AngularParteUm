import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bidirecional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bidirecional.component.html',
  styleUrl: './bidirecional.component.css'
})
export class BidirecionalComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
