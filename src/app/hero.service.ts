import { Injectable } from '@angular/core';

//Inject it into the HeroService starts here
import { MessageService } from './message.service';
//Inject it into the HeroService ends here

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

  //constructor() { } // default constructor by creating

  //Inject it into the HeroService starts here
  constructor(private messageService: MessageService) { }
  //Inject it into the HeroService ends here

  //getHeroes(): Hero[] {
  //  return HEROES;
  //}

  //Observable HeroService starts here
  //getHeroes(): Observable<Hero[]> {
    //const heroes = of(HEROES);
    //return heroes;
  //}
  //Observable HeroService ends here

  //Send a message from HeroService starts here
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  //Send a message from HeroService ends here
}


