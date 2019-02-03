import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../beans/user';
import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pending-maps',
  templateUrl: './user-pending-maps.component.html',
  styleUrls: ['./user-pending-maps.component.css']
})
export class UserPendingMapsComponent implements OnInit {
  user: User;
  myResolvedMaps: UserMap[];
  myPendingMaps: UserMap[];
  defaultMessage: string = 'Tracking down that user...';
  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMyMaps();
  }
  getMyMaps(): void {
    this.mapService.getMyMaps()
      .subscribe(mapList => this.handleUserMaps(mapList));
  }
  handleUserMaps(allMaps: UserMap[]): void {
    var separatedMaps = this.mapService.getPendingAndResolvedMaps(allMaps);
    this.myResolvedMaps = separatedMaps['resolved'];
    this.myPendingMaps = separatedMaps['pending'];
  }

}
