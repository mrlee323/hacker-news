import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/images/icon=user.svg';
import { ReactComponent as CommentIcon } from '../../assets/images/icon=comment.svg';
import { NavLink } from 'react-router-dom';
const ListUserBlock = styled.div`
  margin-top: 1.25rem;
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
      font-weight: 500;
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

const ListUser = ({ id, point, descendants, time, childeren, ...rest }) => {
  const times = useMemo(() => {
    const today = parseInt(Date.now() / 1000);
    const date = Math.round((today - time) / (60 * 60));
    return date;
  }, [time]);

  return (
    <ListUserBlock {...rest}>
      <div className="userId">
        <NavLink to={`/users/${id}`} style={{ display: 'flex' }}>
          <UserIcon />
          <p className="id">{id}</p>
        </NavLink>
        <p className="score">{point} points</p>
        <p className="time">{times} days ago</p>
      </div>
      <div className="comentCount">
        <CommentIcon />
        <p>{descendants}</p>
      </div>
    </ListUserBlock>
  );
};

export default ListUser;
