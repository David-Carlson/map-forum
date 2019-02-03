import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { UserMap } from '../beans/user-map';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mapCards: UserMap[];
  constructor(
    private mapService: MapService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.getMapList();
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (currentUser.admin === 'user')
        this.router.navigate(['users/dashboard']);
      else
        this.router.navigate(['admin/dashboard']);
    }
  }

  getMapList() : void {
    this.mapService.getMapList()
      .subscribe(mapList => this.mapCards = mapList);
  }

}
