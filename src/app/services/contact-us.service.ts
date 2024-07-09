import { Injectable } from '@angular/core';
import { Message } from '../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private storageKey = 'eventMessages';

  hasMessages(): boolean {
    return this.getMessages().length > 0;
  }
  
  getMessages(): Message[] {
    const messages = localStorage.getItem(this.storageKey);
    return messages ? JSON.parse(messages) : [];
  }

  addMessage(message: Message): void {
    const messages = this.getMessages();
    messages.push(message);
    localStorage.setItem(this.storageKey, JSON.stringify(messages));
    console.log(messages)
  }

}