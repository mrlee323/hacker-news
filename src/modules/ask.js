import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_ASK = 'ask/GET_ASK';
const GET_ASK_SUCCESS = 'ask/GET_ASK_SUCCESS';

export const getAsk = createRequestThunk(GET_ASK, api.getAsk);

const initialState = {
  asks: null,
  count: null,
};

const ask = handleActions(
  {
    [GET_ASK_SUCCESS]: (state, action) => ({
      ...state,
      asks: action.payload.item,
      count: action.payload.page,
    }),
  },
  initialState,
);

export default ask;
