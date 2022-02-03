import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/ask_banner.svg';
import AskContiner from '../container/AskContiner';
const AskBlock = styled(Responsive)``;

const Ask = () => {
  return (
    <section className="ask">
      <AskBlock>
        <Banner alt="banner" style={{ width: '24.4rem' }} />
        <AskContiner />
      </AskBlock>
    </section>
  );
};

export default Ask;
