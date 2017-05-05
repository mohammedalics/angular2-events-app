import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'
import { Observable } from 'rxjs/Rx'

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp: any

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp)
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ['mohammed', 'ali'] }
            mockHttp.delete.and.returnValue(Observable.of(false))

            voterService.deleteVoter(3, <ISession>session, "mohammed");
            expect(session.voters.length).toBe(1)
            expect(session.voters[0]).toBe("ali")
        })


        it('should call http.delete with the right URL', () => {
            var session = { id: 6, voters: ['mohammed', 'ali'] }
            mockHttp.delete.and.returnValue(Observable.of(false))
            voterService.deleteVoter(3, <ISession>session, "mohammed");
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/mohammed')
        })
    })

    describe('addVoter', () => {
        it('should call http.post with the right URL', () => {
            var session = { id: 6, voters: ["mohammed"] };
            mockHttp.post.and.returnValue(Observable.of(false))
            voterService.addVoter(3, <ISession>session, "ali")
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/ali', "{}", jasmine.any(Object)
            )
        })
    })

})