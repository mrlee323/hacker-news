import React, { useEffect } from 'react';
import styled from 'styled-components';
import PaginationButton from './common/PaginationButton';
import Responsive from '../components/common/Responsive';
import DropDown from '../components/common/DropDown';
import Mode from './common/Mode';

import NewItem from './NewItem';

const NewListBlock = styled(Responsive)`
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  .sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
`;

const NewList = ({ news, setCurrentPage, currentPage, count }) => {
  return (
    <NewListBlock>
      <div className="sort">
        <DropDown />
        <Mode />
      </div>
      <NewItem news={news} />
      {/* <PaginationButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        count={count}
      /> */}
    </NewListBlock>
  );
};

export default NewList;
