import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

export interface Item {
  id: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private firestore: AngularFirestore) {
  }

  getTodos(): Observable<Item[]> {
    return this.firestore.collection<Item>('todos').valueChanges();
  }

  getDones(): Observable<Item[]> {
    return this.firestore.collection<Item>('dones').valueChanges();
  }
}
