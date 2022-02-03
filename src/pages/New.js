import React from 'react';
import NewContainer from '../container/NewContainer';
import { ReactComponent as Banner } from '../assets/images/new_banner.svg';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
const NewBlcok = styled(Responsive)``;
const New = () => {
  return (
    <section className="new">
      <NewBlcok>
        <Banner alt="banner" style={{ width: '24.4rem' }} />
        <NewContainer />
      </NewBlcok>
    </section>
  );
};

export default New;
