import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import JobContainer from '../container/JobContainer';
import { ReactComponent as Banner } from '../assets/images/job_banner.svg';

const JobBlcok = styled(Responsive)``;
const Job = () => {
  return (
    <section className="job">
      <JobBlcok>
        <Banner alt="banner" style={{ width: '24.4rem' }} />
        <JobContainer />
      </JobBlcok>
    </section>
  );
};

export default Job;
