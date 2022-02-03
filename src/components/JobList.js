import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DropDown from '../components/common/DropDown';
import { getJob } from '../modules/job';
import Mode from './common/Mode';
import JobItem from './JobItem';

const JobListBlock = styled.div`
  padding: 1.5rem 1.25rem;
  .sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);

  useEffect(() => {
    dispatch(getJob());
  }, []);
  console.log(jobs);
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
