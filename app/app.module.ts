import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
@NgModule({
    imports: [BrowserModule], 
    declarations: [EventAppComponent, EventsListComponent, EventThumbnailComponent], 
    bootstrap: [EventAppComponent]
})
export class AppModule {}