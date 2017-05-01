import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import {
    EventsListComponent, 
    EventThumbnailComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    EventRouterActivator, 
    EventsListResolver, 
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    EventService

} from './events/index'
import { EventAppComponent } from './events-app.component'
import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'
import { TOASTR_TOKEN, Toastr, JQUERY_TOKEN, CollapsibleWellComponent } from './common/index'
import { AuthService } from './user/auth.service'
import { appRoutes } from './routes'

declare let toastr: Toastr;
declare let jquery: Object;

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ], 
    declarations: [
        EventAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent, 
        EventDetailsComponent, 
        CreateEventComponent, 
        CreateSessionComponent, 
        SessionListComponent,
        Error404Component,
        NavBarComponent,
        CollapsibleWellComponent, 
        DurationPipe
        ], 
    providers: [
        EventService, 
        {
            provide: TOASTR_TOKEN, 
            useValue: toastr 
        }, 
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