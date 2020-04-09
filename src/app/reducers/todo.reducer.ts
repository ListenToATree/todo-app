import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TodoActions from '../actions/todo.actions';
import {Item} from '../models/item.model';

export const todoesFeatureKey = 'todoes';

export interface TodoState extends EntityState<Item> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialState: TodoState = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo,
    (state, action) => adapter.addOne(action.todo, state)
  ),
  on(TodoActions.upsertTodo,
    (state, action) => adapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.addTodos,
    (state, action) => adapter.addMany(action.todos, state)
  ),
  on(TodoActions.upsertTodos,
    (state, action) => adapter.upsertMany(action.todos, state)
  ),
  on(TodoActions.updateTodo,
    (state, action) => adapter.updateOne(action.todo, state)
  ),
  on(TodoActions.updateTodos,
    (state, action) => adapter.updateMany(action.todos, state)
  ),
  on(TodoActions.deleteTodo,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodos,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TodoActions.loadTodosSuccess,
    (state, action) => adapter.setAll(action.todos, state)
  ),
  on(TodoActions.loadTodosFailure,
    (state) => adapter.setAll([], state)
  ),
  on(TodoActions.clearTodos,
    state => adapter.removeAll(state)
  ),
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectAllTodos = selectAll;
