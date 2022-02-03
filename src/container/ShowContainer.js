import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowList from '../components/ShowList';
import { getShow } from '../modules/show';

const ShowContainer = () => {
  const dispatch = useDispatch();
  const { shows, count } = useSelector((state) => state.show);

  // useEffect(() => {
  //   dispatch(getShow());
  // });
  return (
    <section className="show">
      <ShowList shows={shows} count={count} />
    </section>
  );
};

export default ShowContainer;
