import { GetState, Dispatch } from '../reducers/types';

const { Archive } = require('../models')

export const LOAD_ARCHIVE = 'LOAD_ARCHIVE';

export function loadArchive(path: String) {

  console.log("path: ", path);
  const archive = new Archive(path);
  console.log(archive.tournaments.length);
  return {
    type: LOAD_ARCHIVE
  };
}

export function increment() {
  return {
    type: LOAD_ARCHIVE
  };
}



export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
