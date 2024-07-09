import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private storageKey = 'eventRegistrations';

  hasRegistrations(): boolean {
    return this.getRegistrations().length > 0;
  }
  
  getRegistrations(): Registration[] {
    const registrations = localStorage.getItem(this.storageKey);
    return registrations ? JSON.parse(registrations) : [];
  }

  getRegistrationsByEmail(email: string): Registration[] {
    const registrations = this.getRegistrations();
    return registrations.filter(registration => registration.userEmail === email);
  }

  addRegistration(registration: Registration): void {
    const registrations = this.getRegistrations();
    registrations.push(registration);
    localStorage.setItem(this.storageKey, JSON.stringify(registrations));
  }

  deleteRegistration(registration: Registration): void {
    const registrations = this.getRegistrations();
    const index = registrations.findIndex(reg => reg.id === registration.id);
    if (index !== -1) {
      registrations.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(registrations));
    }
  }

  editRegistration(registration: Registration): void {
    const registrations = this.getRegistrations();
    const index = registrations.findIndex(reg => reg.id === registration.id);
    if (index !== -1) {
      registrations[index] = registration;
      localStorage.setItem(this.storageKey, JSON.stringify(registrations));
    }
  }
}
