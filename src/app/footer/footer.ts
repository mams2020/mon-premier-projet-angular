import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  annee = signal(2026);

  changerAnnee() {
    this.annee.update((valeur) => valeur + 1);
  }
}
