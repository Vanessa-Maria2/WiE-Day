import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Evento } from '../../models/Event';


@Component({
  selector: 'app-card-schedule',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-schedule.component.html',
  styleUrl: './card-schedule.component.css'
})
export class CardScheduleComponent {
  @Input() eventData!: Evento[];
  @Input() titulo!: string;
}
