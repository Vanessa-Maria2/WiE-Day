import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormContactUsComponent } from "../form-contact-us/form-contact-us.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatIconModule, FormContactUsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
