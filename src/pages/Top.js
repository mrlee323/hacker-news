import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import banner from '../assets/images/top_banner.svg';

const TopBlock = styled(Responsive)`
  .top {
    background: #efefef;
  }
`;

const Top = () => {
  return (
    <TopBlock>
      <section className="top">
        <img src={banner} alt="banner" />
        <div></div>
      </section>
    </TopBlock>
  );
};

export default Top;
