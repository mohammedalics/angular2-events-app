import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router'
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: "/app/user/profile.component.html"
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor (private authService: AuthService, private router: Router, private toastrService: ToastrService) {

  }
  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName)
    let lastName = new FormControl(this.authService.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.toastrService.success('Profile updated successfully!')
    this.router.navigate(['events'])

  }
}