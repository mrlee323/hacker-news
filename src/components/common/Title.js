import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Responsive from '../common/Responsive';
import TimeIcon from '../../assets/images/bx_bx-time.svg';
import RightArrow from '../../assets/images/icon=arrow_right.svg';
import Update from '../../assets/images/icon=updated.svg';

const TodayBlock = styled(Responsive)`
  width: 390px;
  height: 68px;
  padding: 40px 20px 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Today = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h2 {
    color: #202020;
    font-size: 24px;
    font-weight: 700;
  }
`;

const Time = styled.div`
  visibility: hidden;
  display: flex;
  .icon_time {
    margin-top: 5px;
  }
  .time {
    color: #b7b7b7;
    font-weight: 500;
    margin-left: 2px;
    margin-top: 8px;
  }

  ${(props) =>
    props.timer === "Today's Top" &&
    css`
      visibility: visible;
    `}
`;

const Icon = styled.img.attrs({
  src: `${Update}`,
})`
  cursor: pointer;
  ${(props) =>
    props.other === "Today's Top" &&
    css`
      display: none;
    `}
`;

const Title = ({ children, link, ...rest }) => {
  const time = () => {
    const date = new Date();
    const hour = date.getHours();
    const now = `${hour}:00`;
    return now;
  };
  return (
    <TodayBlock {...rest}>
      <NavLink to={`${link}`} style={{ flex: 1, textDecoration: 'none' }}>
        <Today>
          <h2>{children}</h2>
          <img src={RightArrow} alt="arrow" className="icon_arrow" />
        </Today>
      </NavLink>
      <Time timer={children}>
        <img src={TimeIcon} alt="time" className="icon_time" />
        <div className="time">{time()}</div>
      </Time>
      <Icon other={children}></Icon>
    </TodayBlock>
  );
};

export default Title;
