import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/show_banner.svg';
import ShowContainer from '../container/ShowContainer';

const ShowBlcok = styled(Responsive)``;

const Show = () => {
  return (
    <ShowBlcok>
      <Banner alt="banner" style={{ width: '24.4rem' }} />
      <ShowContainer />
    </ShowBlcok>
  );
};

export default Show;
