import { handleActions } from 'redux-actions';
import createAction from '../../node_modules/redux-actions/lib/createAction';
// import createfilterActions from '../lib/createfilterActions';

const FILTER_RESULTS = 'filter/FILTER_RESULTS';
const FILTER_COMMENTS = 'filter/FILTER_COMMENTS';
const FILTER_POINTS = 'filter/FILTER_POINTS';
const FILTER_KARMA = 'filter/FILTER_KARMA';

const FILTER_TIME = 'filter/FILTER_TIME';
const FILTER_DAY = 'filter/FILTER_DAY';
const FILTER_WEEKS = 'filter/FILTER_WEEKS';
const FILTER_MONTH = 'filter/FILTER_MONTH';

export const results = createAction(FILTER_RESULTS, (items) => items);
export const comments = createAction(FILTER_COMMENTS, (items) => items);
export const points = createAction(FILTER_POINTS, (items) => items);
export const karma = createAction(FILTER_KARMA, (items) => items);

// export const day = (items, type) => createfilterActions(items, type)();
// // export const time = createAction(FILTER_TIME, (items) => items);
// // export const day = createAction(FILTER_DAY, (items) => items);
// // export const weeks = createAction(FILTER_WEEKS, (items) => items);
// // export const month = createAction(FILTER_MONTH, (items) => items);

const initialState = {
  filter: null,
};

const filter = handleActions(
  {
    [FILTER_RESULTS]: (state, action) => ({
      ...state,
      filter: [...action.payload],
    }),
    [FILTER_COMMENTS]: (state, action) => ({
      ...state,
      filter: [...action.payload].sort((a, b) => b.descendants - a.descendants),
    }),
    [FILTER_POINTS]: (state, action) => ({
      ...state,
      filter: [...action.payload].sort((a, b) => b.score - a.score),
    }),
    [FILTER_KARMA]: (state, action) => ({
      ...state,
      filter: [...action.payload].sort((a, b) => b.by - a.by),
    }),
  },
  initialState,
);

export default filter;
