import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPageComponent } from './map-page/map-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UploadMapComponent } from './upload-map/upload-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminPendingMapsComponent } from './admin-pending-maps/admin-pending-maps.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'maps/:id', component: MapPageComponent },
  { path: 'users/:name', component: UserPageComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'uploadMap', component: UploadMapComponent },
  { path: 'AdminDashboard', component: AdminPendingMapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
