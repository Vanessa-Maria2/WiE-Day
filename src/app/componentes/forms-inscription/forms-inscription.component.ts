import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './forms-inscription.component.html',
  styleUrl: './forms-inscription.component.css'
})
export class FormsInscriptionComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: ['', Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)],
      userCourse: ['']
    });
  }

  formatPhoneNumber(): void {
    let phoneNumber = this.registrationForm.get('userPhone')?.value;
    if (phoneNumber) {
      // Remove todos os caracteres não numéricos
      let cleaned = ('' + phoneNumber).replace(/\D/g, '');
      // Limita a 11 dígitos
      cleaned = cleaned.slice(0, 11);

      // Formatação progressiva
      if (cleaned.length > 0) {
        cleaned = '(' + cleaned;
      }
      if (cleaned.length > 2) {
        cleaned = cleaned.slice(0, 3) + ') ' + cleaned.slice(3);
      }
      if (cleaned.length > 9) {
        cleaned = cleaned.slice(0, 10) + '-' + cleaned.slice(10);
      }

      this.registrationForm.get('userPhone')?.setValue(cleaned, { emitEvent: false });
    }
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.registrationService.addRegistration(this.registrationForm.value);
      alert('Inscrição realizada com sucesso!');
      this.registrationForm.reset();
      this.router.navigate(['/minhas-inscricoes']);
    }
  }
}
