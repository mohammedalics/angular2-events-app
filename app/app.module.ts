import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {
    EventsListComponent, 
    EventThumbnailComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    EventRouterActivator, 
    EventsListResolver, 
    EventService

} from './events/index'
import { EventAppComponent } from './events-app.component'
import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { AuthService } from './user/auth.service'
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
    providers: [
        EventService, 
        ToastrService, 
        EventRouterActivator,
        EventsListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateComponent', 
            useValue: checkDirtyState 
        }
        ],
    bootstrap: [EventAppComponent]
})
export class AppModule {}

function checkDirtyState (component: CreateEventComponent) {
    return component.isDirty ? window.confirm('You have not saved this event, do you want to cancel?') : true
}