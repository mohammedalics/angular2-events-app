import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from '../shared/event.service'
import { ToastrService } from '../../common/toastr.service'

@Component(
    {
        templateUrl: '/app/events/create-event/create-event.component.html',
        styles: [
            `
      em {float:right; color: #E05C65; padding-left:10px;}
      .error input {background-color: #E3C3C5;}
      .error ::-webkit-input-placeholder {color: #999; }
      .error ::-moz-placeholder {color: #999; }
      .error :-moz-placeholder {color: #999; }
      .error ::-ms-input-placeholder {color: #999; }
    `
        ]
    }
)
export class CreateEventComponent {
    isDirty: boolean = true
    constructor(private router: Router, private eventService: EventService, private toastrService: ToastrService) {
   }

   saveEvent(formValues) {

       this.eventService.saveEvent(formValues)
       this.isDirty = false; 
       this.toastrService.success('Event created successfully')
       this.router.navigate(['/events'])


      }

    cancel() {
        this.router.navigate(['/events'])
    }
}