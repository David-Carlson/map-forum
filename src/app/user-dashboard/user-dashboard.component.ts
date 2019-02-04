import { Component, OnInit, Input } from '@angular/core';
import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  @Input() mapCards: UserMap[];
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.getMapList();
  }

  getMapList() : void {
    this.mapService.getMapList()
      .subscribe(mapList => this.mapCards = mapList);
  }

}
