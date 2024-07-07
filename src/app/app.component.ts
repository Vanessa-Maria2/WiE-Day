import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CardParticipantComponent } from './componentes/card-participant/card-participant.component';
import { Evento } from './interfaces/Event';
import { CardScheduleComponent } from './componentes/card-schedule/card-schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, CardParticipantComponent, CardScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wie-day';
  manha = 'Manhã'
  eventData: Evento[] = [
    { time: '10:00 AM', activity: 'Opening Remarks' },
    { time: '11:00 AM', activity: 'Keynote Speech' },
    // ... Add more events as needed
  ];

}
