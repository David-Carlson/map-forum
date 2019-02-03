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
  defaultMapPic:string = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
  mapPictureMessage;


  constructor() { 
    this.uploadMap = new UserMap('', '', '', 'pending', null, null, null);
  }

  ngOnInit() {
  }
  // https://grokonez.com/frontend/angular/angular-4-uploadget-multipartfile-tofrom-spring-boot-server
  // https://stackoverflow.com/questions/47756044/send-json-and-image-with-single-request-angular-spring-boot?rq=1
  // https://academind.com/learn/angular/snippets/angular-image-upload-made-easy/
  readImage(event): void {
    this.mapPictureMessage = null;
    if (event.target.files && event.target.files[0]) {
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.mapPictureMessage = 'Only images are supported';
        return;
      }

      const pictureFile = event.target.files[0];
      this.uploadMap.pictureFile = pictureFile;
      var reader = new FileReader();
      reader.onload = e => this.uploadMap.image = reader.result;
      reader.readAsDataURL(pictureFile);
      console.log('done with pictureFile');
      console.log(this.uploadMap.pictureFile == null)
    }
  }
  readFile(event): void {
    if (event.target.files && event.target.files[0]) {
      this.uploadMap.mapFile = event.target.files[0];
      // TODO: Find our correct reader method
      // var reader = new FileReader();
      // reader.onload = e => this.mapFile = reader.result;
      // reader.readAsDataURL(file);
      console.log('done with map-file upload');
      console.log(this.uploadMap.mapFile == null)
    }
  }

  onSubmit() {
    this.submitted = true;
  }

}
