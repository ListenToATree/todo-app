import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Observable} from 'rxjs';
import {selectDones, selectTodos, State} from '../reducers';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {Item} from '../models/item.model';
import {loadTodos} from '../actions/todo.actions';
import {loadDones} from '../actions/done.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Item[]>;
  dones$: Observable<Item[]>;

  constructor(private store: Store<State>, ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.store.dispatch(loadDones());
    this.todos$ = this.store.select(selectTodos).pipe(tap(console.log));
    this.dones$ = this.store.select(selectDones);
  }

  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  deleteDone(done: Item) {
    console.log(done);
  }
}
