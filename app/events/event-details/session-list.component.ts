import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'

@Component({
    selector: 'session-list',
    templateUrl: '/app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {


    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService: VoterService) {

    }

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortSessions(this.sortBy)
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter)
        }
    }

    sortSessions(sortBy) {
        sortBy === 'name' ?
            this.visibleSessions = this.visibleSessions.sort((s1: ISession, s2: ISession) => s1.name > s2.name ? 1 : (s1.name < s2.name ? -1 : 0)) :
            this.visibleSessions = this.visibleSessions.sort((s1: ISession, s2: ISession) => s2.voters.length - s1.voters.length)
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName).subscribe(); 

        } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
        }

        if (this.sortBy === 'votes')
            this.sortSessions(this.sortBy)
        
    
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }


}