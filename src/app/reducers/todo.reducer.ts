import {createReducer, on} from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import {Item} from '../todo-list/item';

export const todoFeatureKey = 'todo';

export interface State {
  todos: Item[];
  dones: Item[];
}

export const initialState: State = {
  todos: [],
  dones: []
};


export const reducer = createReducer(
  initialState,

  on(TodoActions.loadTodosSuccess, (state, {todos}) => ({...state, todos})),
  on(TodoActions.loadTodosFailure, (state) => ({...state, todos: []})),

  on(TodoActions.loadDonesSuccess, (state, {dones}) => ({...state, dones})),
  on(TodoActions.loadDonesFailure, (state) => ({...state, dones: []})),
);

