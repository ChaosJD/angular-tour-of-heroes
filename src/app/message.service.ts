import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService { // Writes in the Cache

  //constructor() { }


  //Create the MessageService starts here
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  //Create the MessageService ends here


}
