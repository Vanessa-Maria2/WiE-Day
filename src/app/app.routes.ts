import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { EventScheduleComponent } from './componentes/event-schedule/event-schedule.component';
import { AboutComponent } from './componentes/about/about.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'evento', component: AboutComponent},
    {path: 'programacao', component: EventScheduleComponent},
    {path: 'empresas', component: HomeComponent},
    {path: 'contato', component: HomeComponent},
    {path: 'inscricao', component: HomeComponent}
];
