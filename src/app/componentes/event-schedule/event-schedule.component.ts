import { Component } from '@angular/core';
import { CardScheduleComponent } from '../card-schedule/card-schedule.component';
import { Evento } from '../../interfaces/Event';

@Component({
  selector: 'app-event-schedule',
  standalone: true,
  imports: [CardScheduleComponent],
  templateUrl: './event-schedule.component.html',
  styleUrl: './event-schedule.component.css'
})
export class EventScheduleComponent {
  manha = 'Manhã'
  tarde = 'Tarde'
  
  eventDataManha: Evento[] = [
    { time: '09:00 AM', activity: 'Credenciamento' },
    { time: '09:30 AM', activity: 'Abertura' },
    { time: '09:40 AM', activity: 'Palestra - Sistemas Embarcados ma Indústria 4.0: Transformando o Futuro Social, Ambiental e Econômico. Ministrado por Monica Magalhães' },
    { time: '09:40 AM', activity: 'Workshop - Introdução aos conceitos básicos do tinkercad' },
    { time: '10:20 AM', activity: 'Mesa redonda - Perspectivas em Inteligência Artifical: Desafios e Oportunidades. Ana Catarina, Marina Ribeiro, Juliana Santiago e Thuanny Albuquerque' },
    { time: '11:00 AM', activity: 'Palestra - Oportunidades de carreira na IA: como começar? Por Thaís Ramos' },
    { time: '12:00 AM', activity: 'Pausa para almoço' }
  ];

  eventDataTarde: Evento[] = [
    { time: '14:00 PM', activity: 'Feira de exposição' },
    { time: '15:00 AM', activity: 'Sorteio de Prêmios: Licenças Alura + surpresas'},
    { time: '15:30 AM', activity: 'Coffee break' },
    { time: '16:00 AM', activity: "Tech Women's Circle: Troca de Experiências e Networking"},
    { time: '16:40 AM', activity: 'Encerramento' }
  ];

}
