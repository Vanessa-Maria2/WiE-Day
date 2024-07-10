import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Registration } from '../../interfaces/Registration';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsInscriptionComponent } from '../forms-inscription/forms-inscription.component';

@Component({
  selector: 'app-my-inscriptions',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './my-inscriptions.component.html',
  styleUrl: './my-inscriptions.component.css'
})
export class MyInscriptionsComponent implements OnInit {
  registrations: Registration[] = [];

  constructor(private registrationService: RegistrationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.registrations = this.registrationService.getRegistrations();
  }

  editRegistration(registration: Registration): void {
    const dialogRef = this.dialog.open(FormsInscriptionComponent, {
      width: '400px',
      data: registration // Pass the registration data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registrationService.editRegistration(result);
        this.registrations = this.registrationService.getRegistrations(); // Refresh the list
      }
    });
  }

  deleteRegistration(registration: Registration): void {
    this.registrationService.deleteRegistration(registration);
    this.registrations = this.registrationService.getRegistrations(); // Refresh the list
  }
}
