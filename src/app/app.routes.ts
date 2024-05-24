import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'evento', component: HomeComponent},
    {path: 'programacao', component: HomeComponent},
    {path: 'empresas', component: HomeComponent},
    {path: 'contato', component: HomeComponent},
    {path: 'inscricao', component: HomeComponent}
];
