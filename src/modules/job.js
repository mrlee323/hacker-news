import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_JOB = 'job/GET_JOB';
const GET_JOB_SUCCESS = 'job/GET_JOB_SUCCESS';

export const getJob = createRequestThunk(GET_JOB, api.getJob);

const initialState = {
  jobs: null,
  count: null,
};

const job = handleActions(
  {
    [GET_JOB_SUCCESS]: (state, action) => ({
      ...state,
      jobs: action.payload.item,
      count: action.payload.page,
    }),
  },
  initialState,
);

export default job;
