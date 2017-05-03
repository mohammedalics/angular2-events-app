import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import {
    EventsListComponent, 
    EventThumbnailComponent, 
    EventDetailsComponent, 
    CreateEventComponent,  
    EventsListResolver, 
    EventResolver, 
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    VoterService,
    UpvoteComponent,
    LocationValidator,
    EventService

} from './events/index'
import { EventAppComponent } from './events-app.component'
import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'
import { TOASTR_TOKEN, Toastr, JQUERY_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index'
import { AuthService } from './user/auth.service'
import { appRoutes } from './routes'

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, ReactiveFormsModule, HttpModule,
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
        UpvoteComponent,
        Error404Component,
        NavBarComponent,
        CollapsibleWellComponent, 
        SimpleModalComponent,
        ModalTriggerDirective,
        LocationValidator,
        DurationPipe
        ], 
    providers: [
        EventService, 
        {
            provide: TOASTR_TOKEN, 
            useValue: toastr 
        }, 
        {
            provide: JQUERY_TOKEN, 
            useValue: jQuery
        }, 

        EventsListResolver,
        EventResolver,
        VoterService,
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