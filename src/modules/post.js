import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';

export const getPost = createRequestThunk(GET_POST, api.getPost);

const initialState = {
  posts: null,
  count: null,
};

const post = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      posts: action.payload.item,
      count: action.payload.page,
    }),
  },
  initialState,
);

export default post;
