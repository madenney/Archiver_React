
import { 
    SHOW_OPEN_ARCHIVE_MODAL
} from '../actions/modals';
import {
    modalActionType
} from './types';

const initialState = {
  isOpenArchiveModal: false
}

export default function modals(state = initialState, action: modalActionType) {
  switch (action.type) {
    case SHOW_OPEN_ARCHIVE_MODAL:
      return {
          ...state,
          isOpenArchiveModal: action.payload
      };
    default:
      return state;
  }
}
