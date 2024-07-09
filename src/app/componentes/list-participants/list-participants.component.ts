import { Component } from '@angular/core';
import { Participant } from '../../interfaces/Participant';
import { CardParticipantComponent } from '../card-participant/card-participant.component';

@Component({
  selector: 'app-list-participants',
  standalone: true,
  imports: [CardParticipantComponent],
  templateUrl: './list-participants.component.html',
  styleUrl: './list-participants.component.css'
})
export class ListParticipantsComponent {
  participants: Participant[] = [
    {
      name: 'Ana Catarina',
      content: 'Professora do IMD, graduada em Ciência da Computação',
      imagePath: 'assets/foto_ana.jpeg'
    },
    {
      name: 'Marina',
      content: 'Professora do IMD, graduada em Ciência da Computação',
      imagePath: 'assets/foto_marina.jpeg'
    },
    {
      name: 'Monica', 
      content: 'Professora do IMD, graduada em Ciência da Computação',
      imagePath: 'assets/foto_monica.jpeg'
    },
    {
      name: 'Thuanny', 
      content: 'Professora do IMD, graduado em Ciência da Computação',
      imagePath: 'assets/foto_thuanny.png'
    },
  ];
}
