import React from 'react';
import { ReactComponent as GitHubIcon } from '../../assets/images/github.svg';
import styled from 'styled-components';

const BoxBlock = styled.div`
  width: 10.6rem;
  height: 10.6rem;
  margin: 0 0 1.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  padding: 1rem 0.75rem 0;
  box-sizing: border-box;

  h3 {
    margin-top: 0.375rem;
    height: 2.7rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.textColor};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const CardBox = ({ children, ...rest }) => {
  return (
    <BoxBlock {...rest}>
      <GitHubIcon />
      {children}
    </BoxBlock>
  );
};

export default CardBox;
