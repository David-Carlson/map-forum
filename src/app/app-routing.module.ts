import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPageComponent } from './map-page/map-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UploadMapComponent } from './upload-map/upload-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminPendingMapsComponent } from './admin-pending-maps/admin-pending-maps.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPendingMapsComponent } from './user-pending-maps/user-pending-maps.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users/dashboard', component: UserDashboardComponent },
  { path: 'users/me', component: UserPendingMapsComponent },
  { path: 'maps/:mapname', component: MapPageComponent },
  { path: 'users/:username', component: UserPageComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'uploadMap', component: UploadMapComponent },
  { path: 'admin/dashboard', component: AdminPendingMapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
