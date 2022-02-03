import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/post';
import Post from '../pages/Post';
import Mode from '../components/common/Mode';
import styled from 'styled-components';
import PaginationButton from '../components/common/PaginationButton';

const PostContainerBlock = styled.div`
  padding: 0 1.25rem;
  .post {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const PostContainer = ({ items }) => {
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  useEffect(() => {
    dispatch(getPost(indexOfFirst, indexOfLast, perPage));
  }, [currentPage]);

  return (
    <section className="post">
      <PostContainerBlock>
        <Post posts={posts} />
        <PaginationButton
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          count={count}
        />
      </PostContainerBlock>
    </section>
  );
};

export default PostContainer;
