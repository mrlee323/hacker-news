import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Responsive from './Responsive';
import NavMenu from './NavMenu';
import { Time } from './Time';
import { ReactComponent as Battery } from '../../assets/images/Battery.svg';
import { ReactComponent as Wifi } from '../../assets/images/Wifi.svg';
import { ReactComponent as Signal } from '../../assets/images/Cellular Connection.svg';
import { ReactComponent as AboutIcon } from '../../assets/images/about.svg';
import Logo from '../../assets/images/logo.svg';
import { ReactComponent as SetMode } from '../../assets/images/dark_mode.svg';
import { changeTheme } from '../../redux/theme';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Wrapper = styled(Responsive)`
  .header {
    height: 5.4rem;
    background: ${({ theme }) => theme.headerColor};
    padding: 0.8rem 0.9rem 0.8rem 1.5rem;
    box-sizing: border-box;
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-time {
        font-weight: bold;
        font-size: 1rem;
        margin-left: 0.3rem;
      }
      .top-icon {
        svg {
          fill: ${({ theme }) => theme.iconColor};
          margin-left: 0.3rem;
          &:last-child {
            stroke: ${({ theme }) => theme.iconColor};
          }
        }
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      h1 {
        flex: 1;
        font-weight: 500;
        font-size: 1.3rem;
        color: #fff;
        margin-left: 0.2rem;
      }
    }
  }
`;

const AboutNavLink = styled(NavLink).attrs({ to: '/about' })`
  svg {
    fill: #fff;
    margin: 0.2rem 0 0 0.3rem;
  }
  &.active {
    svg {
      fill: #b7b7b7;
    }
  }
`;

const Spacer = styled.div`
  height: 7.9rem;
`;

const Header = () => {
  const [hour, min] = Time();
  const time = `${hour}:${min < 10 ? `0${min}` : min}`;

  const dispatch = useDispatch();

  const Toggle = useCallback(() => {
    dispatch(changeTheme());
  }, [dispatch]);

  return (
    <header>
      <HeaderBlock>
        <Wrapper>
          <div className="header">
            <div className="top-bar">
              <div className="top-time">{time}</div>
              <div className="top-icon">
                <Signal />
                <Wifi />
                <Battery />
              </div>
            </div>
            <div className="title">
              <img src={Logo} alt="svelte-logo" />
              <h1>Svelte Hacker News</h1>
              <SetMode onClick={Toggle} />
              <AboutNavLink>
                <AboutIcon />
              </AboutNavLink>
            </div>
          </div>
          <NavMenu />
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </header>
  );
};

export default React.memo(Header);
