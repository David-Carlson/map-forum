import { Component, OnInit, Input } from '@angular/core';
import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {
  @Input() mapInfo: UserMap;
  @Input() showAuthor: boolean = true;
  @Input() pendingButton: boolean = false;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  onApprove() {
    this.mapService.approveMap(this.mapInfo.name);
  }
  // onDeny() {

  // }

}
