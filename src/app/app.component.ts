import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CardParticipantComponent } from './componentes/card-participant/card-participant.component';
import { Evento } from './interfaces/Event';
import { CardScheduleComponent } from './componentes/card-schedule/card-schedule.component';
import { EventScheduleComponent } from './componentes/event-schedule/event-schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wie-day';
}
