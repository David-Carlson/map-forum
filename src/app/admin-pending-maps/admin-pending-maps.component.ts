import { Component, OnInit } from '@angular/core';

import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-admin-pending-maps',
  templateUrl: './admin-pending-maps.component.html',
  styleUrls: ['./admin-pending-maps.component.css']
})
export class AdminPendingMapsComponent implements OnInit {
  pendingMaps: UserMap[];
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.getMapList();
  }

  getMapList() : void {
    this.mapService.getMapList()
      .subscribe(mapList => this.handleUserMaps(mapList));
  }
  handleUserMaps(allMaps: UserMap[]): void {
    var separatedMaps = this.mapService.getPendingAndResolvedMaps(allMaps);
    this.pendingMaps = separatedMaps['pending'];
  }

}
