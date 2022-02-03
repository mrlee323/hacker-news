import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../assets/images/icon=user.svg';
import { ReactComponent as CommentIcon } from '../assets/images/icon=comment.svg';

const AskUserBlock = styled.div`
  border-top: 1px solid #949494;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  .userId {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 0.75rem;

    svg {
      fill: ${({ theme }) => theme.userIcon};
    }
    .id {
      color: ${({ theme }) => theme.userName};
      margin-left: 0.2rem;
      font-weight: 600;
    }
    .score {
      color: #949494;
      margin-left: 0.4rem;
    }
    .time {
      color: #949494;
      margin-left: 0.6rem;
    }
  }
  .comentCount {
    display: flex;
    align-items: center;
    p {
      font-size: 0.75rem;
      color: #ed702d;
      margin-left: 0.2rem;
    }
  }
`;

const AskUser = ({ id, point, comment, time, childeren, ...rest }) => {
  return (
    <AskUserBlock {...rest}>
      <div className="userId">
        <UserIcon />
        <p className="id">{id}아이디</p>
        <p className="score">{point} points</p>
      </div>
      <div className="comentCount">
        <CommentIcon />
        <p>{comment}333</p>
      </div>
    </AskUserBlock>
  );
};

export default AskUser;
