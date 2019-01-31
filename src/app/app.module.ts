import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
// npm install angular-in-memory-web-api --save
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapCardComponent } from './map-card/map-card.component';
import { UploadMapComponent } from './upload-map/upload-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPendingMapsComponent } from './admin-pending-maps/admin-pending-maps.component';
import { UserPendingMapsComponent } from './user-pending-maps/user-pending-maps.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    MapPageComponent,
    MapListComponent,
    MapCardComponent,
    UploadMapComponent,
    DashboardComponent,
    AdminPendingMapsComponent,
    UserPendingMapsComponent,
    RegisterUserComponent,
    UserDashboardComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
