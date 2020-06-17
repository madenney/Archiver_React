// import { GetState, Dispatch } from '../reducers/types';

export const SHOW_OPEN_ARCHIVE_MODAL = 'SHOW_NEW_ARCHIVE_MODAL';

export function showNewArchiveModal(show: Boolean) {
  return {
    type: SHOW_OPEN_ARCHIVE_MODAL,
    payload: show
  };
}