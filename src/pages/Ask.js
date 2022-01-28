import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/ask_banner.svg';
import Mode from '../components/common/Mode';
const AskBlock = styled(Responsive)``;

const Ask = () => {
  return (
    <AskBlock>
      <Banner alt="banner" style={{ width: '24.4rem' }} />
      <Mode />
    </AskBlock>
  );
};

export default Ask;
