import React from 'react';
import TodayAsk from '../components/TodayAsk';
import TodayJob from '../components/TodayJob';
import TodayNew from '../components/TodayNew';
import TodayShow from '../components/TodayShow';
import TodayTop from '../components/TodayTop';
import TodayUser from '../components/TodayUser';
import banner from '../assets/images/banner.svg';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { useSelector } from 'react-redux';
const HomeBlock = styled(Responsive)`
  background: ${({ theme }) => theme.topBackColor}; ;
`;

const Home = () => {
  const top = useSelector((state) => state.top);
  return (
    <section className="home">
      <HomeBlock>
        <img src={banner} alt="banner" style={{ width: '24.4rem' }} />
        <TodayTop top={top.post} />
        <TodayNew news={top.news} />
        <TodayUser />
        <TodayShow show={top.show} />
        <TodayAsk ask={top.ask} />
        <TodayJob job={top.job} />
      </HomeBlock>
    </section>
  );
};

export default Home;
