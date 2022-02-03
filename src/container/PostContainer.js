import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/post';

import PostList from '../components/PostList';

const PostContainer = ({ items }) => {
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);

  //pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [perPage] = useState(20);

  // const indexOfLast = currentPage * perPage;
  // const indexOfFirst = indexOfLast - perPage;

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <section className="post">
      <PostList posts={posts} count={count} />
    </section>
  );
};

export default PostContainer;
