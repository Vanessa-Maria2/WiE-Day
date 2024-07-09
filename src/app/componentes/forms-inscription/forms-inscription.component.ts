import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './forms-inscription.component.html',
  styleUrl: './forms-inscription.component.css'
})
export class FormsInscriptionComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = this.fb.group({
      eventName: ['', Validators.required],
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.registrationService.addRegistration(this.registrationForm.value);
      alert('Inscrição realizada com sucesso!');
      this.registrationForm.reset();
    }
  }
}
