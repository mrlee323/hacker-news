import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_SHOW = 'show/GET_SHOW';
const GET_SHOW_SUCCESS = 'show/GET_SHOW_SUCCESS';

export const getShow = createRequestThunk(GET_SHOW, api.getShow);

const initialState = {
  shows: null,
  count: null,
};

const show = handleActions(
  {
    [GET_SHOW_SUCCESS]: (state, action) => ({
      ...state,
      shows: action.payload.item,
      count: action.payload.page,
    }),
  },
  initialState,
);

export default show;
