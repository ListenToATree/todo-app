import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from './todo.reducer';
import * as fromDone from './done.reducer';

export interface State {

  [fromTodo.todoesFeatureKey]: fromTodo.TodoState;
  [fromDone.donesFeatureKey]: fromDone.DoneState;
}

export const reducers: ActionReducerMap<State> = {

  [fromTodo.todoesFeatureKey]: fromTodo.reducer,
  [fromDone.donesFeatureKey]: fromDone.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectTodoState = createFeatureSelector<fromTodo.TodoState>(
  fromTodo.todoesFeatureKey
);

export const selectDoneState = createFeatureSelector<fromDone.DoneState>(
  fromDone.donesFeatureKey
);

export const selectTodos = createSelector(
  selectTodoState,
  fromTodo.selectAllTodos
);

export const selectDones = createSelector(
  selectDoneState,
  fromDone.selectAllDones
);
