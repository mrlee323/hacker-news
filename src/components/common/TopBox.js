import React from 'react';
import styled from 'styled-components';

const TopBoxBlock = styled.ul`
  width: 21.9rem;
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background: ${({ theme }) => theme.postColor};
`;

const TopBox = ({ childern, ...rest }) => {
  return <TopBoxBlock {...rest}>{childern}</TopBoxBlock>;
};

export default TopBox;
