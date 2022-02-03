import { startLoading, finishLoading } from '../modules/loading';
import { getUser } from './api';

const createRequestUser = (type, userId) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return () => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await getUser(userId);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
};

export default createRequestUser;
