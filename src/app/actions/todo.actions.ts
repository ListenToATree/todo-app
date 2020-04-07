import {createAction, props} from '@ngrx/store';
import {Item} from '../todo-list/item';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Item[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure'
);

export const loadDones = createAction(
  '[Done] Load Dones'
);

export const loadDonesSuccess = createAction(
  '[Done] Load Dones Success',
  props<{ dones: Item[] }>()
);

export const loadDonesFailure = createAction(
  '[Done] Load Dones Failure'
);
