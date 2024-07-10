import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ContactUsService } from '../../services/contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contact-us',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form-contact-us.component.html',
  styleUrl: './form-contact-us.component.css'
})
export class FormContactUsComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.contactUsService.addMessage(this.form.value);
      alert('Mensagem enviada com sucesso!');
      this.form.reset();
      this.router.navigate(['/home']);
    }
  }
}
