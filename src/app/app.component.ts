import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EditHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  selectedHero?: SuperHero;
  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() {
    this.superHeroService
    .getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.selectedHero = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.selectedHero = hero;
  }
}
