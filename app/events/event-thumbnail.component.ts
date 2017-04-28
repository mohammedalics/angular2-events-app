import { Component , Input , Output, EventEmitter } from '@angular/core'

@Component(
    {
        selector: 'event-thumbnail', 
        templateUrl: '/app/events/event-thumbnail.component.html', 
        styles: [`
            .thumbnail { min-hight: 210px; } 
            .pad-left { margin-left: 10px; }
            .well dev { color: #bbb; }
        `]
    }
)
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter(); 
    anyProperty: any = "any property"
    handleClickMe() {
        this.eventClick.emit(this.event.name); 
    }

    printFoo() {
        console.log("printFoo called!");
    }
}