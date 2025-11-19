import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes, // Для більш складних анімацій
} from '@angular/animations';
@Component({
  selector: 'app-animated-title',
  imports: [CommonModule],
  templateUrl: './animated-title.html',
  styleUrl: './animated-title.scss',
})
export class AnimatedTitle {
  protected readonly title = signal('Список чарівних тварин');
}
