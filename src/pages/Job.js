import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/job_banner.svg';

const JobBlcok = styled(Responsive)``;

const Job = () => {
  return (
    <JobBlcok>
      <Banner alt="banner" style={{ width: '24.4rem' }} />
    </JobBlcok>
  );
};

export default Job;
