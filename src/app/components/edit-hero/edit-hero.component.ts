import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuperHeroService } from '../../services/super-hero.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css'
})
export class EditHeroComponent {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() {
  }

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => (this.heroesUpdated.emit(heroes)));
  }

  createHero(hero: SuperHero) {
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: SuperHero[]) => (this.heroesUpdated.emit(heroes)));
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => (this.heroesUpdated.emit(heroes)));
  }

}
