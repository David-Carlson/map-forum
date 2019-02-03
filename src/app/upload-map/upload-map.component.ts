import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { UserMap } from '../beans/user-map';
import { MapService } from '../services/map.service';
import { AuthenticationService } from '../services/authentication.service';
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

  returnUrl: string;
  loading = false;

  uploadForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router,
    private mapService: MapService,
    private authenticationService: AuthenticationService
  ) { 
    this.uploadMap = new UserMap('', '', '', 'pending', null, null);
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      mapname: ['', Validators.required],
      description: ['', Validators.required],
      image:    [null, Validators.required],
      file:    [null, Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.uploadForm.controls; }

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
      var reader = new FileReader();
      reader.onload = e => this.uploadMap.image = reader.result;
      // reader.onload = e => this.uploadForm.patchValue({image: reader.result})
      reader.readAsDataURL(pictureFile);
      console.log('done with image Upload');
    }
  }
  readFile(event): void {
    if (event.target.files && event.target.files[0]) {
      var mapFile = event.target.files[0];
      var reader = new FileReader();
      reader.onload = () => this.uploadMap.file = reader.result;
      // reader.onload = e => this.uploadForm.patchValue({file: reader.result})
      reader.readAsDataURL(mapFile);
      console.log('done with file Upload');
    }
  }

  onSubmit() {
    console.log('Submitting');
    this.submitted = true;
    const submitter = this.authenticationService.currentUserValue.username;
    this.mapService.uploadMap(this.f.mapname.value, this.f.description.value, submitter, this.uploadMap.image, this.uploadMap.file)
      .subscribe(
        mapData => console.log('Got back ' + mapData),error => console.log('Error uploading: ' + error)
      );
  }

}

/*

<!-- 
<main role='main' class='container'>
  <div class="row">
    <form #mapForm='ngForm' (ngSubmit)='onSubmit()' class='col-xs-12 col-lg-6 mx-auto nes-container with-title is-centered'>
      <h2 class="title">
        <input  type='text' class='form-control nes-field h3' required placeholder="Map name here"
          #mapName name='map-name' id='map-name'[(ngModel)]='uploadMap.mapname'/>
      </h2>
      
      <div class="card mb-8 box-shadow">
        <img class="card-img-top" [src]="uploadMap.image ? uploadMap.image : defaultMapPic" alt="Map Picture">

        <div class="card-body dflex justifiy-content-between align-items-center">

          <div class="upload-btn-wrapper form-group">
            <button class="nes-btn">Upload an image</button>
            <input type="file" accept='image/*' class='form-control' required (change)='readImage($event)'
              #mapPic  name="map-pic" id='map-pic'/>
          </div>     

          <div class='upload-btn-wrapper form-group'>
            <button class="nes-btn">Upload the Map File</button>
            <input type='file' class='form-control' required (change)='readFile($event)'
              #mapFile name='map-file' id='map-file'/>
          </div>
            

          <div class="form-group">
            <label for='map-info-input'>Map Description:</label>
            <textarea class='form-control nes-textarea' maxlength="255" minlength="10" required 
              #mapInfo='ngModel' name='mapInfo' [(ngModel)]='uploadMap.description'
              placeholder="Write about what makes your map unique"></textarea>            
              <div [hidden]='mapInfo.valid || mapInfo.pristine' class='alert alert-danger'>
                A description is required
              </div>
              <br>
          </div>
          <p *ngIf='uploadMap.file'>Map File here</p>
          <p *ngIf='uploadMap.image'>Picture File here</p>
          <button (click)='onSubmit()' type="submit" class="nes-btn" 
          
            [className]="mapForm.form.valid  && uploadMap.file && uploadMap.image ? 'nes-btn is-primary' : 'nes-btn'" >Submit Map</button>
        </div>  
      </div>
          
    </form>
  </div>
</main> -->


*/
