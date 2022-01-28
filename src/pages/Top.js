import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Category from '../components/Category';
import Post from './Post';
import Users from './Users';
import Mode from '../components/common/Mode';
import { ReactComponent as Banner } from '../assets/images/top_banner.svg';

const TopBlock = styled(Responsive)``;

const Top = () => {
  return (
    <TopBlock>
      <section className="top">
        <Banner alt="banner" style={{ width: '24.4rem' }} />
        <Category />
        <Mode />
        <Post />
        <Users />
      </section>
    </TopBlock>
  );
};

export default Top;
