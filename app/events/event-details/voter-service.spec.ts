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
            var session = {id: 6, voters: ['mohammed', 'ali']}
            mockHttp.delete.and.returnValue(Observable.of(false))

            voterService.deleteVoter(3, <ISession>session, "mohammed"); 
            expect(session.voters.length).toBe(1)
            expect(session.voters[0]).toBe("ali")
        })
    })

})