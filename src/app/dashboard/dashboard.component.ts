import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { UserMap } from '../beans/user-map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mapCards: UserMap[];
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.getMapList();
  }

  getMapList() : void {
    this.mapService.getMapList()
      .subscribe(mapList => this.mapCards = mapList);
  }

}
