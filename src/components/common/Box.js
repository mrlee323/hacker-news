import React from 'react';
import styled from 'styled-components';

export const BoxBlock = styled.div`
  width: 21.9rem;
  margin: 0 auto 1.75rem;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  border-radius: 6px;
`;

const TextBlock = styled.div`
  width: 21.9rem;
  margin: 0 auto 1.75rem;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  border-radius: 6px;
  .title {
    padding: 1.7rem 0 1rem 1.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      font-weight: 700;
    }
    .nav {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      h2 {
        margin-right: 0.3rem;
      }
    }
  }
  .content {
    font-size: 0.85rem;
    line-height: 1.25rem;
    letter-spacing: 0.001rem;
    color: ${({ theme }) => theme.textColor};
    padding: 0.5rem 1.25rem 1.25rem 1.25rem;
    box-sizing: border-box;
    a {
      color: ${({ theme }) => theme.textColor};
      &:visited {
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
`;

export const TextBox = ({ children, ...rest }) => {
  return <TextBlock {...rest}>{children}</TextBlock>;
};
