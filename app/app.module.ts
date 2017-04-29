import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(appRoutes)
    ], 
    declarations: [EventAppComponent, EventsListComponent, EventThumbnailComponent, EventDetailsComponent, NavBarComponent], 
    providers: [EventService, ToastrService],
    bootstrap: [EventAppComponent]
})
export class AppModule {}