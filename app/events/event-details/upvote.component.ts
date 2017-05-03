import { Component, EventEmitter, Input, Output} from '@angular/core'

@Component ({
    selector: 'upvote', 
    styleUrls: ['/app/events/event-details/upvote.component.css'],
    template: `
        <div class="votingWeightContainer pointable" (click)="onClick()">
            <div class="well votingWeidget">
                <div class="votingButton">
                    <i [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div> 
            </div>
        </div>
    `
})
export class UpvoteComponent {

    @Input() count: number; 
    @Input() set voted(val)  {
        this.iconColor = val? 'red' : 'white'
    } 
    @Output() vote = new EventEmitter(); 
    iconColor: String; 
    onClick() {
        this.vote.emit({})
    }

}