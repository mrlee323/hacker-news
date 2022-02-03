import React, { useEffect } from 'react';
import styled from 'styled-components';
import DropDown from '../components/common/DropDown';
import Mode from '../components/common/Mode';
import AskItem from '../components/AskItem';

const AskListBlock = styled.div`
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  .sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
`;
const AskList = () => {
  return (
    <AskListBlock>
      <div className="sort">
        <DropDown />
        <Mode />
      </div>
      <AskItem />
      <AskItem />
      <AskItem />
      <AskItem />
    </AskListBlock>
  );
};

export default AskList;
