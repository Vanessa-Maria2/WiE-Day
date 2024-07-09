import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Registration } from '../../interfaces/Registration';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-inscriptions',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './my-inscriptions.component.html',
  styleUrl: './my-inscriptions.component.css'
})
export class MyInscriptionsComponent implements OnInit {
  registrations: Registration[] = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrations = this.registrationService.getRegistrations();
  }
}
