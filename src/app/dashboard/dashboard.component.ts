import { Component, OnInit } from '@angular/core';
//Add a dashboard view stars here
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//Add a dashboard view ends here

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  //Add a dashboard view stars here
  heroes: Hero[] = [];
  //Add a dashboard view ends here


  // constructor() { } // creates by default
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {

  
  //Add a dashboard view stars here
  this.getHeroes();
  //Add a dashboard view ends here


  }


  //Add a dashboard view stars here
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  //Add a dashboard view ends here

}
