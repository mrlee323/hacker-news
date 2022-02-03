import { getItem } from './api';
import { startLoading, finishLoading } from '../modules/loading';

const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return () => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request();
      const arr = response.data;
      // const pageCount = arr.length / 20;
      // const slice = arr.slice(0, 15);
      const res = [];
      arr.map(async (id) => {
        const response = await getItem(id);
        res.push(response.data);
      });
      dispatch({
        type: SUCCESS,
        payload: { item: res, page: null },
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

export default createRequestThunk;
