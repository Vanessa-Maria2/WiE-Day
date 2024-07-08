import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Partner } from '../../interfaces/Partner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-partner',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-partner.component.html',
  styleUrl: './card-partner.component.css'
})
export class CardPartnerComponent {
  @Input() partners: Partner[] = [];
  @Input() title: string = '';
}
