import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../beans/user';
import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;
  myMaps: UserMap[];
  defaultMessage: string = 'Tracking down that user...';

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('name');
    this.getUserMaps(username);
    this.getUserInfo(username);
  }
  getUserInfo(username: string): void {
    this.userService.getUser(username)
      .subscribe(userResponse => this.handleUserInfo(userResponse));
      // .subscribe(userResponse => this.user = userResponse != null? userResponse[0] : null)
  }
  handleUserInfo(response: User) {
    if (response != null){
      this.user = response[0];
      console.log('is user');
    }
    else {
      console.log('No user');
      this.defaultMessage = "Can't find this user!";
    }
  }

  getUserMaps(username: string): void {
    this.mapService.getUserMaps(username)
      .subscribe(mapList => this.myMaps = mapList);
  }

}
