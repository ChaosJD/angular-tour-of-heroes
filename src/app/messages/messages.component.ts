import { Component, OnInit } from '@angular/core';
//Display the message form HeroService starts here
import { MessageService } from '../message.service';
//Display the message form HeroService ends here

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //constructor() { } //default contructor by creating

  //Display the message form HeroService starts here
  constructor(public messageService: MessageService) {}
  //Display the message form HeroService ends here


  ngOnInit(): void {
  }

}
