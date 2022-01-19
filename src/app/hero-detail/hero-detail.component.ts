//import { Component, OnInit } from '@angular/core';


// Add the @Input() hero property starts here
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
// Add the @Input() hero property ends here


//Routable HeroDetailComponent starts here
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
//Routable HeroDetailComponent ends here

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero | undefined;
  // Add the @Input() hero property starts here
   //@Input() hero?: Hero;
  // Add the @Input() hero property ends here

  //constructor() { } //creates by default


  //Routable HeroDetailComponent starts here
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  //Routable HeroDetailComponent ends here

  ngOnInit(): void {
    

    //Extract the id route parameter starts here
    this.getHero();
    //Extract the id route parameter ends here


  }

  //Extract the id route parameter starts here
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  //Extract the id route parameter ends here


  goBack(): void {
    this.location.back();
  }

}
