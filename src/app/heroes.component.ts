import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  partRepo: string;
  
  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getParts().then(partRepo => this.partRepo = partRepo);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
