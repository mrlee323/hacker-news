import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestTop from '../lib/createRequestTop';

const GET_POST = 'top/GET_POST';
const GET_POST_SUCCESS = 'top/GET_POST_SUCCESS';

const GET_NEW = 'top/GET_NEW';
const GET_NEW_SUCCESS = 'top/GET_NEW_SUCCESS';

const GET_SHOW = 'top/GET_SHOW';
const GET_SHOW_SUCCESS = 'top/GET_SHOW_SUCCESS';

const GET_ASK = 'top/GET_ASK';
const GET_ASK_SUCCESS = 'top/GET_ASK_SUCCESS';

const GET_JOB = 'top/GET_JOB';
const GET_JOB_SUCCESS = 'top/GET_JOB_SUCCESS';

export const getTopPost = createRequestTop(GET_POST, api.getPost);
export const getTopNew = createRequestTop(GET_NEW, api.getNew);
export const getTopShow = createRequestTop(GET_SHOW, api.getShow);
export const getTopAsk = createRequestTop(GET_ASK, api.getAsk);
export const getTopJob = createRequestTop(GET_JOB, api.getJob);

const initialState = {
  post: [],
  news: [],
  show: [],
  ask: [],
  job: [],
};

const top = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: state.post.concat(action.payload),
    }),
    [GET_NEW_SUCCESS]: (state, action) => ({
      ...state,
      news: state.news.concat(action.payload),
    }),
    [GET_SHOW_SUCCESS]: (state, action) => ({
      ...state,
      show: state.show.concat(action.payload),
    }),
    [GET_ASK_SUCCESS]: (state, action) => ({
      ...state,
      ask: state.ask.concat(action.payload),
    }),
    [GET_JOB_SUCCESS]: (state, action) => ({
      ...state,
      job: state.job.concat(action.payload),
    }),
  },
  initialState,
);

export default top;
