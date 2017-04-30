import { Routes } from '@angular/router'
import {
    EventsListComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    CreateSessionComponent, 
    EventRouterActivator, 
    EventsListResolver
} from './events/index'

import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateComponent'] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} }, 
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]}, 
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]