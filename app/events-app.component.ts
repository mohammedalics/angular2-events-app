
import { Component } from '@angular/core'
import { AuthService } from './user/auth.service'

@Component({
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `

})
export class EventAppComponent {

    constructor(private auth: AuthService) {

    }

    ngOnInit() {
        this.auth.checkAuthenticationStatus().subscribe(); 
    }

}