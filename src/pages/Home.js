import React from 'react';
import TodayAsk from '../components/today/TodayAsk';
import TodayJob from '../components/today/TodayJob';
import TodayNew from '../components/today/TodayNew';
import TodayShow from '../components/today/TodayShow';
import TodayTop from '../components/today/TodayTop';
import TodayUser from '../components/today/TodayUser';
import banner from '../assets/images/banner.svg';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
const HomeBlock = styled(Responsive)``;

const Home = () => {
  return (
    <HomeBlock>
      <section className="home">
        <img src={banner} alt="banner" style={{ width: '24.4rem' }} />
        <TodayTop />
        <TodayNew />
        <TodayUser />
        <TodayShow />
        <TodayAsk />
        <TodayJob />
      </section>
    </HomeBlock>
  );
};

export default Home;
