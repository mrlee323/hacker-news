import React, { useEffect } from 'react';
import styled from 'styled-components';
import DropDown from '../components/common/DropDown';
import Mode from './common/Mode';
import JobItem from './JobItem';

const JobListBlock = styled.div`
  padding: 1.5rem 1.25rem;
  .sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
`;

const JobList = ({ jobs }) => {
  return (
    <JobListBlock>
      <div className="sort">
        <DropDown />
        <Mode />
      </div>
      <JobItem jobs={jobs} />
    </JobListBlock>
  );
};

export default JobList;
