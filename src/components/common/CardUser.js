import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/images/icon=user.svg';
import { ReactComponent as CommentIcon } from '../../assets/images/icon=comment.svg';
import { ReactComponent as PointIcon } from '../../assets/images/icon=point.svg';
import { ReactComponent as TimeIcon } from '../../assets/images/icon=small-time.svg';

const UserBlock = styled.div`
  margin-top: 1.8rem;
  .info {
    display: flex;
    color: #949494;
    align-items: center;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    svg {
      margin-right: 0.1rem;
    }
    .score {
      margin-right: 0.3rem;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    .userId {
      flex: 1;
      display: flex;
      align-items: center;
      svg {
        fill: ${({ theme }) => theme.userIcon};
        width: 0.9rem;
        height: 0.9rem;
      }
      .id {
        font-weight: 500;
        color: ${({ theme }) => theme.userName};
        margin-left: 0.2rem;
      }
    }
    .comentCount {
      display: flex;
      align-items: center;
      svg {
        width: 0.9rem;
        height: 0.9rem;
      }
      p {
        font-size: 0.75rem;
        color: #ed702d;
        margin-left: 0.2rem;
        font-weight: 500;
      }
    }
  }
`;

const CardUser = ({ childeren, ...rest }) => {
  return (
    <UserBlock {...rest}>
      <div className="info">
        <PointIcon />
        <p className="score">194</p>
        <TimeIcon />
        <p className="time">2 hours</p>
      </div>
      <div className="userInfo">
        <div className="userId">
          <UserIcon />
          <p className="id">Kristin Watson</p>
        </div>
        <div className="comentCount">
          <CommentIcon />
          <p>240</p>
        </div>
      </div>
    </UserBlock>
  );
};

export default CardUser;
