import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JobList from '../components/JobList';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from '../modules/job';

const JobContainer = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);

  useEffect(() => {
    dispatch(getJob());
  }, [dispatch]);

  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
};

export default JobContainer;
