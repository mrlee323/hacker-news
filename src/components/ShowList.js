import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import ShowItem from './ShowItem';
import DropDown from '../components/common/DropDown';
import Mode from './common/Mode';

const ShowListBlock = styled(Responsive)`
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  .sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
`;
const ShowList = ({ shows }) => {
  return (
    <ShowListBlock>
      <div className="sort">
        <DropDown />
        <Mode />
      </div>
      <ShowItem shows={shows} />
    </ShowListBlock>
  );
};

export default ShowList;
