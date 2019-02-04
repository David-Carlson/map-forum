import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../beans/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public currentUser: User;
  constructor(
    public authenticationService: AuthenticationService,
    private location: Location) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(data => this.currentUser = data);
  }
  onLogout(): void {
    this.authenticationService.logout();
  }

  goBack() {
    this.location.back();
  }

}
