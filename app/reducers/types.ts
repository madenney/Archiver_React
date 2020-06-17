import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type counterStateType = {
  counter: number;
};

export type archiveStateType = {
  archive: Object;
}

export type modalStateType = {
  isOpenArchiveModal: Boolean
}

export interface modalActionType {
  type: String,
  payload: Boolean
}

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<counterStateType, Action<string>>;
