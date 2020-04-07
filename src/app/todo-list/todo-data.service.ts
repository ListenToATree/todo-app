import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Item {
  id: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  testItem: Item = {id: 1, description: 'thing'};

  constructor() {
  }

  getTodos(): Observable<Item[]> {
    return of([this.testItem]);
  }

  getDones(): Observable<Item[]> {
    return of([this.testItem]);
  }
}
