import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Animal } from '../class/animal';
import { AnimatedTitle } from './animated-title/animated-title';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AnimatedTitle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  animals!: Animal[];
  async populate() {
    const requestURL = 'https://api.jsonbin.io/v3/b/654a3dd712a5d376599618c7';
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok) {
      const ani = await response.json();
      this.animals = ani.record;
    } else alert('Помилка');
  }
  //Викликаємо при завантажені сторінки
  ngOnInit() {
    this.populate();
  }
}
