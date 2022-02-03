import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getUsers } from '../modules/user';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from '../components/common/Responsive';
import ListBox from '../components/common/ListBox';
import ListUser from '../components/common/ListUser';
import { ReactComponent as Join } from '../assets/images/icon=join.svg';
import { ReactComponent as Karma } from '../assets/images/icon=karma.svg';
import { Ago } from '../components/common/Time';

const UserBlock = styled(Responsive)`
  padding: 1.9rem 0;
  box-sizing: border-box;
`;

const UserBox = styled(ListBox)`
  .info {
    margin-top: 1rem;
    display: flex;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.textColor};
    align-items: center;
    svg {
      margin-right: 0.3rem;
    }
    span {
      margin-right: 0.5rem;
    }
  }
`;

const ComentBox = styled(ListBox)`
  letter-spacing: 0.01rem;
  h3 {
    line-height: 1.3;
    font-weight: 500;
  }
  a {
    color: #b7b7b7;
    font-size: 0.75rem;
  }
`;

const Users = () => {
  const params = useParams().username;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUsers(params));
  }, [dispatch, params]);

  return (
    <section className="user">
      <UserBlock>
        <UserBox>
          <h2>{user.id}</h2>
          <div className="info">
            <Join />
            <span>{Ago(user.times)}</span>
            <Karma />
            <span>{user.karma}</span>
          </div>
        </UserBox>
        <ComentBox>
          <h3>
            <span style={{ color: '#ED702D' }}>Show HN:</span> Bulk convert
            Images online without sending to server
          </h3>
          <a href="http://">webutils.app</a>
          <ListUser />
        </ComentBox>
        <div>{}</div>
      </UserBlock>
    </section>
  );
};
export default Users;
