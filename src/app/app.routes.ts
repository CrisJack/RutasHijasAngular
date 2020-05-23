import {RouterModule, Routes  } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { DisenoComponent } from './components/proyectos/diseno.component';
import { ProduccionComponent } from './components/proyectos/produccion.component';
import { SoftwareComponent } from './components/proyectos/software.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'proyectos', component: ProyectosComponent, children:[
        {path:'diseno', component: DisenoComponent},
        {path:'produccion', component: ProduccionComponent},
        {path:'software', component: SoftwareComponent},
    ] },    
    { path: '**', component: HomeComponent },

    
];

export const Routing = RouterModule.forRoot(routes);

