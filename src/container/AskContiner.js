import React from 'react';
import styled from 'styled-components';
import DropDown from '../components/common/DropDown';
import Mode from '../components/common/Mode';

const AskContinerBlock = styled.div`
  padding: 1.5rem 1.25rem;
  .sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  box-sizing: border-box;
`;
const AskContiner = () => {
  return (
    <AskContinerBlock>
      <div className="sort">
        <DropDown />
        <Mode />
      </div>
    </AskContinerBlock>
  );
};

export default AskContiner;
