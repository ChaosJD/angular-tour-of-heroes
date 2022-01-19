import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Add a hero property starts here
  hero = 'Windstorm';
  //Add a hero property ends here
  constructor() { }

  ngOnInit(): void {
  }

}
