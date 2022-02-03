import React from 'react';
import styled from 'styled-components';

const PostListBlock = styled.div`
  width: 21.9rem;
  margin: 0 auto 1.25rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  padding: 1.25rem 0.75rem 1.13rem;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  h2 {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.38rem;
    font-weight: 700;
  }
  h3 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.textColor};
  }
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textColor};
    line-height: 1.5;
  }
`;

const ListBox = ({ children, ...rest }) => {
  return <PostListBlock {...rest}>{children}</PostListBlock>;
};

export default ListBox;
