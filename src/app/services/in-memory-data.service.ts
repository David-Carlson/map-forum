import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserMap } from '../beans/user-map';
import { User } from '../beans/user';
import { USERS } from '../beans/mock-users';
import { MAPS } from '../beans/mock-maps';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { users: USERS, maps: MAPS};
  }
  constructor() { }
}
