import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Item} from '../models/item.model';

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

export const addDone = createAction(
  '[Done/API] Add Done',
  props<{ done: Item }>()
);

export const upsertDone = createAction(
  '[Done/API] Upsert Done',
  props<{ done: Item }>()
);

export const addDones = createAction(
  '[Done/API] Add Dones',
  props<{ dones: Item[] }>()
);

export const upsertDones = createAction(
  '[Done/API] Upsert Dones',
  props<{ dones: Item[] }>()
);

export const updateDone = createAction(
  '[Done/API] Update Done',
  props<{ done: Update<Item> }>()
);

export const updateDones = createAction(
  '[Done/API] Update Dones',
  props<{ dones: Update<Item>[] }>()
);

export const deleteDone = createAction(
  '[Done/API] Delete Done',
  props<{ id: string }>()
);

export const deleteDones = createAction(
  '[Done/API] Delete Dones',
  props<{ ids: string[] }>()
);

export const clearDones = createAction(
  '[Done/API] Clear Dones'
);
