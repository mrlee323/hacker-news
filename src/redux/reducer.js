import { combineReducers } from 'redux';
import theme from './theme';
import loading from '../modules/loading';
import top from '../modules/top';
import user from '../modules/user';
import post from '../modules/post';
import filter from '../modules/filter';
import news from '../modules/new';
import show from '../modules/show';
import ask from '../modules/ask';
import job from '../modules/job';

const rootReducer = combineReducers({
  theme,
  loading,
  top,
  user,
  post,
  filter,
  news,
  show,
  ask,
  job,
});

export default rootReducer;
