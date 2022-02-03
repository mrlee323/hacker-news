import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/post';
import Post from '../pages/Post';
import Mode from '../components/common/Mode';
import styled from 'styled-components';

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
  const [postPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    dispatch(getPost(indexOfFirstPost, indexOfLastPost, postPerPage));
  }, [dispatch, currentPage, postPerPage]);

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };
  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className="post">
      <ul>
        {/* {posts.map((post, index) => (
          <li post={post} key={index}>
            {post.title}
          </li>
        ))} */}
      </ul>
      {/* <Mode onClick={onClick} /> */}
      <PostContainerBlock>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div onClick={prev}>-1</div>({currentPage}/{count})
          <div onClick={next}>+1</div>
        </div>
      </PostContainerBlock>
    </section>
  );
};

export default PostContainer;
