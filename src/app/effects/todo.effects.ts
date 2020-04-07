import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as TodoActions from '../actions/todo.actions';
import {AngularFirestore} from '@angular/fire/firestore';
import {Item} from '../todo-list/item';


@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions, private firestore: AngularFirestore) {
  }

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(() =>
        this.firestore.collection<Item>('todos').valueChanges()
          .pipe(
            tap(console.log),
            map(todos => TodoActions.loadTodosSuccess({todos})),
            catchError(() => of(TodoActions.loadTodosFailure())))
      )
    );
  });

  loadDones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadDones),
      concatMap(() =>
        this.firestore.collection<Item>('dones').valueChanges()
          .pipe(
            map(dones => TodoActions.loadDonesSuccess({dones})),
            catchError(() => of(TodoActions.loadDonesFailure())))
      )
    );
  });

}
