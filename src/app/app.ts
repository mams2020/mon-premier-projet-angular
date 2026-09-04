import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Hero } from './hero/hero';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Hero],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mon-premier-projet');
}
