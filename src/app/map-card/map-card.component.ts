import { Component, OnInit, Input } from '@angular/core';
import { UserMap } from '../beans/user-map';


@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {
  @Input() mapInfo: UserMap;
  @Input() showAuthor: boolean = true;
  @Input() pending: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
