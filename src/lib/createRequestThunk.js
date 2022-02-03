import { getItem } from '../lib/api';
import { startLoading, finishLoading } from '../modules/loading';

const createRequestThunk = (
  type,
  request,
  // indexOfFirst,
  // indexOfLast,
  // perPage,
) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return () => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request();
      const ids = response.data;
      const pageCount = ids.length / 20;
      const slice = ids.slice(0, 20);
      const res = [];
      slice.map(async (id) => {
        const data = await getItem(id);
        res.push(data.data);
      });
      dispatch({
        type: SUCCESS,
        payload: { item: res, page: pageCount },
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
