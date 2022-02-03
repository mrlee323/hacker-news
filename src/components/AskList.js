import React from 'react';
import styled from 'styled-components';
import AskUser from './AskUser';

const Contents = styled.div`
  background: #fff;
  .title {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    padding: 0.75rem 1.25rem 0.25rem;
    line-height: 1.5;
  }
  .content {
    color: #727272;
    font-size: 0.88rem;
    line-height: 1.25;
    padding: 0.375rem 1.25rem 0.75rem;
  }
  .times {
    display: flex;
    justify-content: space-between;
    padding: 0 1.25rem 0.8rem;
    .time {
      color: #949494;
      font-size: 0.8rem;
      right: 0;
    }
  }
  .shadow {
    background: #efefef;
    height: 0.75rem;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

const AskList = ({ time }) => {
  const today = parseInt(Date.now() / 1000);
  const date = Math.round((today - { time }) / (60 * 60));
  return (
    <>
      <Contents>
        <h4 className="title">
          <span style={{ color: '#ED702D' }}>AskLIst HN:</span> Why hasn't music
          been disrupted yet in the sam way movies have been?
        </h4>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non
          elementum neque pulvinar consectetur nunc tellus nullam viverra. Nulla
          amet diam dignissim diam,
        </p>
        <div className="times">
          <div />
          <p className="time">{date}hours ago</p>
        </div>
        <AskUser />
        <div className="shadow" />
      </Contents>
    </>
  );
};

export default AskList;
