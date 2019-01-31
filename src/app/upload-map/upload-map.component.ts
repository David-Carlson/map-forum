import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { UserMap } from '../beans/user-map';
// https://angular.io/guide/reactive-forms
// https://stackoverflow.com/questions/44106910/angular-there-is-no-directive-with-exportas-set-to-ngmodel
// https://www.talkingdotnet.com/show-image-preview-before-uploading-using-angular-7/
@Component({
  selector: 'app-upload-map',
  templateUrl: './upload-map.component.html',
  styleUrls: ['./upload-map.component.css']
})
export class UploadMapComponent implements OnInit {
  uploadMap: UserMap;
  submitted: boolean = false;
  mapPicture;
  mapPictureMessage;

  constructor() { 
    this.uploadMap = new UserMap();
    this.uploadMap.picture = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
  }

  ngOnInit() {
  }

  readImage(event): void {
    this.mapPictureMessage = null;
    if (event.target.files && event.target.files[0]) {
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.mapPictureMessage = 'Only images are supported';
        return;
      }

      const file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = e => this.uploadMap.picture = reader.result;
      reader.readAsDataURL(file);
      console.log('done?');
    }
  }

  onSubmit() {
    this.submitted = true;
  }

}
