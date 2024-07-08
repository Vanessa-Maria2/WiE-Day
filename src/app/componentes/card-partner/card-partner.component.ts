import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-partner',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-partner.component.html',
  styleUrl: './card-partner.component.css'
})
export class CardPartnerComponent {
  @Input() name: string = '';
}
