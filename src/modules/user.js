import { handleActions } from 'redux-actions';
import { getUser } from '../lib/api';
import createRequestUser from '../lib/createRequestUser';

const GET_USER = 'user/GET_USER';
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';

export const getUsers = (userId) => createRequestUser(GET_USER, userId)();

const initialState = {
  user: null,
};

const user = handleActions(
  {
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  initialState,
);

export default user;
