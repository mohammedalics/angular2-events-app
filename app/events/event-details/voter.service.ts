import {Injectable } from '@angular/core'
import {ISession} from '../shared/index'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from '@angular/core'

@Injectable() 
export class VoterService {

    constructor (private http: Http) {

    }
    deleteVoter(eventId: number, session: ISession, voterName: string) {
        
        session.voters = session.voters.filter(voter => voter !== voterName); 
        
        this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleErrors).subscribe();   
}

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName); 

        let headers = new Headers({'Content-type' : 'application/json'})
        let options = new RequestOptions({headers : headers}); 
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, JSON.stringify({}), options).catch(this.handleErrors).subscribe(); 
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName); 
    }

    private handleErrors (error: Response) {
        return Observable.throw(error.statusText);
    }
}