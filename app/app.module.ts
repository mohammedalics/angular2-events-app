import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component } from './errors/404.component'

import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventRouterActivator } from './events/event-route-activator.service'
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(appRoutes)
    ], 
    declarations: [
        EventAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent, 
        EventDetailsComponent, 
        CreateEventComponent, 
        Error404Component,
        NavBarComponent
        ], 
    providers: [EventService, ToastrService, EventRouterActivator],
    bootstrap: [EventAppComponent]
})
export class AppModule {}