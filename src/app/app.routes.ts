import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { EventScheduleComponent } from './componentes/event-schedule/event-schedule.component';
import { AboutComponent } from './componentes/about/about.component';
import { AboutPartnerComponent } from './componentes/about-partner/about-partner.component';
import { ContactComponent } from './componentes/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'evento', component: AboutComponent},
    {path: 'programacao', component: EventScheduleComponent},
    {path: 'parceiros', component: AboutPartnerComponent},
    {path: 'contato', component: ContactComponent},
    {path: 'inscricao', component: HomeComponent}
];
