import { Component , Input } from '@angular/core'
import { IEvent } from './index'
@Component(
    {
        selector: 'event-thumbnail', 
        templateUrl: '/app/events/event-thumbnail.component.html', 
        styles: [`
            .green { color: green; !important }
            .bold { font-weight: bold; !important }
            .thumbnail { min-height: 210px; } 
            .pad-left { margin-left: 10px; }
            .well dev { color: #bbb; }
        `]
    }
)
export class EventThumbnailComponent {
    @Input() event: IEvent

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return { green: isEarlyStart, bold: isEarlyStart }
    }
}
