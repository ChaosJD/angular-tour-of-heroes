import { Injectable } from '@angular/core';

//Get hero data starts here
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//Get hero data ends here

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
