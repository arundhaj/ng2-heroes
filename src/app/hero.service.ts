import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  private partRepoURL = "http://www.mocky.io/v2/58cffe800f0000c5044a7dff"
  
  constructor(private http: Http) {
  }
  
  getParts(): Promise<string> {
    return this.http.get(this.partRepoURL).toPromise().then(response => {
      console.log("Response: ", response.json())
      return JSON.stringify(response.json());
    });
  }
 
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    })
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
