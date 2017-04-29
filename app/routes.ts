import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { EventRouterActivator } from './events/event-route-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'
import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateComponent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} }, 
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]}, 
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]