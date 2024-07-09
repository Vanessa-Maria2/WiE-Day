import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Participant} from '../../interfaces/Participant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-participant',
  standalone: true,
  templateUrl: './card-participant.component.html',
  styleUrl: './card-participant.component.css',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardParticipantComponent {
  @Input() participants: Participant[] = [];
}
