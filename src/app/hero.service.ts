import { Injectable } from '@angular/core';

//Get hero data starts here
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//Get hero data ends here

//Observable HeroService starts here
import { Observable, of } from 'rxjs';
//Observable HeroService ends here

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //getHeroes(): Hero[] {
  //  return HEROES;
  //}

  //Observable HeroService starts here
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  //Observable HeroService ends here
}
