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
  altPic: string = 'https://cdn3.iconfinder.com/data/icons/game-development-retro/60/005_-_Game_Testing-512.png';
  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMap();
  }
  getMap(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(`Retrieving ${name}`)
    this.mapService.getMap(name)
      .subscribe(mapList => this.map = mapList[0]);
  }

  goBack(): void {
    this.location.back();
  }

}
