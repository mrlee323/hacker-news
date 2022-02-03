import React from 'react';
import DropDown from '../components/common/DropDown';
import Mode from './common/Mode';
import PostItem from './PostItem';
import styled from 'styled-components';
import PaginationButton from '../components/common/PaginationButton';

const PostListBlock = styled.div`
  padding: 0 1.25rem;
  .sort {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
`;
const PostList = ({ posts, count }) => {
  console.log(posts);
  return (
    <PostListBlock>
      <div className="sort">
        <DropDown />
        <Mode />
      </div>
      <PostItem posts={posts} />
      <PaginationButton
        // setCurrentPage={setCurrentPage}
        // currentPage={currentPage}
        count={count}
      />
    </PostListBlock>
  );
};

export default PostList;
