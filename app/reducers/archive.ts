import { Action } from 'redux';
import { LOAD_ARCHIVE } from '../actions/archive';

export default function counter(state = {}, action: Action<string>) {
  switch (action.type) {
    case LOAD_ARCHIVE:
      return {};
    default:
      return state;
  }
}
