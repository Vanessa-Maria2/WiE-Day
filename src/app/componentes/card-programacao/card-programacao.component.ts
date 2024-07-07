import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Evento } from '../../interfaces/Event';


@Component({
  selector: 'app-card-programacao',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-programacao.component.html',
  styleUrl: './card-programacao.component.css'
})
export class CardProgramacaoComponent {
  @Input() eventData!: Evento[];
  @Input() titulo!: string;
}
