import { Component, OnInit, Input } from '@angular/core';
import { UserMap } from '../beans/user-map';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  @Input() mapCards: UserMap[];
  constructor() { }

  ngOnInit() {
  }

}
