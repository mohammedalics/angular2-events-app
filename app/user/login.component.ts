import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { IUser } from './user.model'
import { AuthService } from './auth.service'
@Component({
  templateUrl: "/app/user/login.component.html",
  styles: [`
    em { float:right; color: #F05C65; padding-left: 10px;}
  `]
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['events'])
        }
    }

    cancel() {
            this.router.navigate(['events'])
    }
}