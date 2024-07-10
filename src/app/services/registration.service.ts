import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private storageKey = 'eventRegistrations';

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  hasRegistrations(): boolean {
    if (!this.isLocalStorageAvailable()) {
      return false;
    }
    return this.getRegistrations().length > 0;
  }

  getRegistrations(): Registration[] {
    if (!this.isLocalStorageAvailable()) {
      return [];
    }
    const registrations = localStorage.getItem(this.storageKey);
    return registrations ? JSON.parse(registrations) : [];
  }

  getRegistrationsByEmail(email: string): Registration[] {
    const registrations = this.getRegistrations();
    return registrations.filter(registration => registration.userEmail === email);
  }

  addRegistration(registration: Registration): void {
    if (!this.isLocalStorageAvailable()) {
      console.warn('Local storage is not available. Registration not saved.');
      return;
    }
    const registrations = this.getRegistrations();
    registrations.push(registration);
    localStorage.setItem(this.storageKey, JSON.stringify(registrations));
  }

  deleteRegistration(registration: Registration): void {
    if (!this.isLocalStorageAvailable()) {
      console.warn('Local storage is not available. Registration not deleted.');
      return;
    }
    const registrations = this.getRegistrations();
    const index = registrations.findIndex(reg => reg.id === registration.id);
    if (index !== -1) {
      registrations.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(registrations));
    }
  }

  editRegistration(registration: Registration): void {
    if (!this.isLocalStorageAvailable()) {
      console.warn('Local storage is not available. Registration not edited.');
      return;
    }
    const registrations = this.getRegistrations();
    const index = registrations.findIndex(reg => reg.id === registration.id);
    if (index !== -1) {
      registrations[index] = registration;
      localStorage.setItem(this.storageKey, JSON.stringify(registrations));
    }
  }
}
