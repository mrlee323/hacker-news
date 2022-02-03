import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_NEW = 'new/GET_NEW';
const GET_NEW_SUCCESS = 'new/GET_NEW_SUCCESS';

export const getNew = (indexOfFirst, indexOfLast, perPage) =>
  createRequestThunk(GET_NEW, api.getNew, indexOfFirst, indexOfLast, perPage)();

const initialState = {
  news: null,
  count: null,
};

const news = handleActions(
  {
    [GET_NEW_SUCCESS]: (state, action) => ({
      ...state,
      news: action.payload.item,
      count: action.payload.page,
    }),
  },
  initialState,
);

export default news;
