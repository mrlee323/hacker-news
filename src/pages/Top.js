import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Category from '../components/Category';
import { ReactComponent as Banner } from '../assets/images/top_banner.svg';
import { Outlet } from 'react-router';

const TopBlock = styled(Responsive)``;

const Top = () => {
  return (
    <section className="top">
      <TopBlock>
        <Banner alt="banner" style={{ width: '24.4rem' }} />
        <Category />
        <Outlet />
      </TopBlock>
    </section>
  );
};

export default Top;
