import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private storageKey = 'eventRegistrations';

  getRegistrations(): Registration[] {
    const registrations = localStorage.getItem(this.storageKey);
    return registrations ? JSON.parse(registrations) : [];
  }

  addRegistration(registration: Registration): void {
    const registrations = this.getRegistrations();
    registrations.push(registration);
    localStorage.setItem(this.storageKey, JSON.stringify(registrations));
  }
}
