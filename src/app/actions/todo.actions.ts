import {createAction, props} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Item} from '../models/item.model';

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

export const addTodo = createAction(
  '[Todo/API] Add Todo',
  props<{ todo: Item }>()
);

export const upsertTodo = createAction(
  '[Todo/API] Upsert Todo',
  props<{ todo: Item }>()
);

export const addTodos = createAction(
  '[Todo/API] Add Todos',
  props<{ todos: Item[] }>()
);

export const upsertTodos = createAction(
  '[Todo/API] Upsert Todos',
  props<{ todos: Item[] }>()
);

export const updateTodo = createAction(
  '[Todo/API] Update Todo',
  props<{ todo: Update<Item> }>()
);

export const updateTodos = createAction(
  '[Todo/API] Update Todos',
  props<{ todos: Update<Item>[] }>()
);

export const deleteTodo = createAction(
  '[Todo/API] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodos = createAction(
  '[Todo/API] Delete Todos',
  props<{ ids: string[] }>()
);

export const clearTodos = createAction(
  '[Todo/API] Clear Todos'
);
