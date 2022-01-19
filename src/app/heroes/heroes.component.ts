import { Component, OnInit } from '@angular/core';


//Create a Hero interface starts here
import { Hero } from '../hero';
//Create a Hero interface ends here


//Update HeroesComponent starts here
import { HeroService } from '../hero.service';
//Update HeroesComponent ends here


//Displaying heroes starts here
import { HEROES } from '../mock-heroes';
//Displaying heroes ends here

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //Add the click event handler starts here
  selectedHero?: Hero;
  //Add the click event handler ends here

  //Displaying heroes starts here
  //heroes = HEROES;
  //Displaying heroes ends here


  //Update HeroesComponent starts here
  heroes: Hero[] = [];
  //Update HeroesComponent ends here


  //Create a Hero interface starts here
  //hero: Hero = {
    //id: 1,
    //name: 'Windstorm'
  //};
  //Create a Hero interface ends here


  //Add a hero property starts here
  //hero = 'Windstorm';
  //Add a hero property ends here


  //constructor() { }

  //Inject the HeroService starts here
  constructor(private heroService: HeroService) {}
  //Inject the HeroService ends here

  ngOnInit(): void {
  }

  //Add the click event handler starts here
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //Add the click event handler ends here
}
