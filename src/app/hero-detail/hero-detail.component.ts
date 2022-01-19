//import { Component, OnInit } from '@angular/core';


// Add the @Input() hero property starts here
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
// Add the @Input() hero property ends here

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  // Add the @Input() hero property starts here
   @Input() hero?: Hero;
  // Add the @Input() hero property ends here

  constructor() { }

  ngOnInit(): void {
  }

}
