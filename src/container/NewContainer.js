import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewItem from '../components/NewItem';
import NewList from '../components/NewList';
import { getNew } from '../modules/new';

const NewContainer = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  useEffect(() => {
    dispatch(getNew(indexOfFirst, indexOfLast, perPage));
  }, [currentPage]);

  const { news, count } = useSelector((state) => state.news);

  return (
    <div>
      <NewList
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        count={count}
        news={news}
      />
    </div>
  );
};

export default NewContainer;
