import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/show_banner.svg';
import Mode from '../components/common/Mode';
const ShowBlcok = styled(Responsive)``;

const Show = () => {
  return (
    <ShowBlcok>
      <Banner alt="banner" style={{ width: '24.4rem' }} />
      <Mode />
    </ShowBlcok>
  );
};

export default Show;
