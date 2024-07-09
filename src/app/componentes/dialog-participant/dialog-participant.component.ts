import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-participant',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './dialog-participant.component.html',
  styleUrl: './dialog-participant.component.css'
})
export class DialogParticipantComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string, content: string, imagePath: string }) { }
}
