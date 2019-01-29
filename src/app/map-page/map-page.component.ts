import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  map: UserMap;
  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMap();
  }
  getMap(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.mapService.get
  }

  goBack(): void {
    this.location.back();
  }

}
