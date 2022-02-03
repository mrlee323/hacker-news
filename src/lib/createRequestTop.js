import { getItem } from './api';
import { startLoading, finishLoading } from '../modules/loading';

const createRequestTop = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return () => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request();
      const arr = response.data;
      const ids = arr.slice(0, 15);
      ids.map(async (id) => {
        const response = await getItem(id);
        return dispatch({
          type: SUCCESS,
          payload: response.data,
        });
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

export default createRequestTop;
