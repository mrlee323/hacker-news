import React, { useEffect, useMemo } from 'react';
import ListBox from './common/ListBox';
import { AgoHour } from './common/Time';

const JobItem = ({ jobs }) => {
  return (
    <div>
      {jobs &&
        jobs.map((job, index) => (
          <ListBox key={index}>
            <a href={`${job.url}`} target="_blank" rel="noreferrer">
              <h3>{job.title}</h3>
            </a>
            <div className="info">
              <div>url</div>
              <div>{AgoHour(job.time)} hours ago</div>
            </div>
          </ListBox>
        ))}
    </div>
  );
};

export default JobItem;
