import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {Item} from '../models/item.model';
import * as DoneActions from '../actions/done.actions';

export const donesFeatureKey = 'dones';

export interface DoneState extends EntityState<Item> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialState: DoneState = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(DoneActions.addDone,
    (state, action) => adapter.addOne(action.done, state)
  ),
  on(DoneActions.upsertDone,
    (state, action) => adapter.upsertOne(action.done, state)
  ),
  on(DoneActions.addDones,
    (state, action) => adapter.addMany(action.dones, state)
  ),
  on(DoneActions.upsertDones,
    (state, action) => adapter.upsertMany(action.dones, state)
  ),
  on(DoneActions.updateDone,
    (state, action) => adapter.updateOne(action.done, state)
  ),
  on(DoneActions.updateDones,
    (state, action) => adapter.updateMany(action.dones, state)
  ),
  on(DoneActions.deleteDone,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DoneActions.deleteDones,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DoneActions.loadDonesSuccess,
    (state, action) => adapter.setAll(action.dones, state)
  ),
  on(DoneActions.loadDonesFailure,
    (state) => adapter.setAll([], state)
  ),
  on(DoneActions.clearDones,
    state => adapter.removeAll(state)
  ),
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectAllDones = selectAll;
