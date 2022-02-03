import React from 'react';
import ListBox from './common/ListBox';
import { Ago } from './common/Time';

const JobItem = ({ jobs }) => {
  return (
    <>
      {jobs &&
        jobs.map((job, index) => (
          <ListBox key={index}>
            <a href={`${job.url}`} target="_blank" rel="noreferrer">
              <h3>{job.title}</h3>
            </a>
            <div className="info">
              <div>url</div>
              <div>{Ago(job.time)}</div>
            </div>
          </ListBox>
        ))}
    </>
  );
};

export default JobItem;
