import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Participant} from '../../models/Participant';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogParticipantComponent } from '../dialog-participant/dialog-participant.component';

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

  constructor(public dialog: MatDialog) {}

  openDialog(participant: Participant): void {
    this.dialog.open(DialogParticipantComponent, {
      data: participant
    });
  }
}
