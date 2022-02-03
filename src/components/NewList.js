import React, { useEffect } from 'react';
import styled from 'styled-components';
import PaginationButton from './common/PaginationButton';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/new_banner.svg';
import NewItem from './NewItem';

const NewListBlock = styled(Responsive)``;

const NewList = ({ news, setCurrentPage, currentPage, count }) => {
  return (
    <NewListBlock>
      <Banner alt="banner" style={{ width: '24.4rem' }} />
      <NewItem news={news} />
      <PaginationButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        count={count}
      />
    </NewListBlock>
  );
};

export default NewList;
