import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserMap } from '../beans/user-map';

@Component({
  selector: 'app-upload-map',
  templateUrl: './upload-map.component.html',
  styleUrls: ['./upload-map.component.css']
})
export class UploadMapComponent implements OnInit {
  uploadMap: UserMap;
  constructor() { 
    this.uploadMap = new UserMap();
  }

  ngOnInit() {
  }

}
