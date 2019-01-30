import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import { UserMap } from '../beans/user-map';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {
  @Input() mapCards: UserMap[];
  @Input() showAuthor: boolean = true;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    // this.getMapList();
  }
  handleClick() {
    
  }

  // getMapList() : void {
  //   this.mapService.getMapList()
  //     .subscribe(mapList => this.mapCards = mapList);
  // }
}
