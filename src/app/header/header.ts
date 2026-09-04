import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // signal: une donnée réactive pour le meu mobile
  isMenuOpen = signal(false);

  // methode : pour basculer l'état du menu
  toggleMenu() {
    this.isMenuOpen.update((etatActuel) => !etatActuel);
  }
}
