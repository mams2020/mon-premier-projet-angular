import { Component } from '@angular/core';

interface Skill {
  nom: string;
  categorie: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  // simple tableau de données
  skills: Skill[] = [
    { nom: 'HTML / CSS / JS', categorie: 'Développement' },
    { nom: 'Angular', categorie: 'Développement' },
    { nom: 'React', categorie: 'Développement' },
    { nom: 'TypeScript', categorie: 'Développement' },
    { nom: 'Python', categorie: 'Développement' },
    { nom: 'Figma', categorie: 'Design' },
    { nom: 'Illustrator / Photoshop', categorie: 'Design' },
    { nom: 'Affinity', categorie: 'Design' },
  ];
}
