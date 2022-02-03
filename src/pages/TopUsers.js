import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const TopUsersBlock = styled(Responsive)`
  margin: 0.5rem 0;
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textColor};
    margin-left: 1.25rem;
    margin-bottom: 1.13rem;
  }
  .rank {
    height: 2.75rem;
    padding: 0.7rem 3rem;
    display: flex;
    background: #eaf4f8;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    li {
      color: #727272;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  .data {
    height: 2.75rem;
    padding: 0.7rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    font-size: 0.9rem;
    .karma {
      color: #ed702d;
    }
    &:nth-child(even) {
      background: #eaf4f8;
      color: #202020;
    }
  }
`;
const TopUsers = () => {
  const users = useSelector((state) => state.user.user);

  return (
    <TopUsersBlock>
      <div className="title">User Ranking 🏆</div>
      <ul className="rank">
        <li>Rank</li>
        <li>UserName</li>
        <li>Karma</li>
      </ul>
      {users &&
        users.map((post, index) => (
          <ul className="data" key={index}>
            <li>rank</li>
            <li>id</li>
            <li className="karma">karma</li>
          </ul>
        ))}
    </TopUsersBlock>
  );
};

export default TopUsers;
