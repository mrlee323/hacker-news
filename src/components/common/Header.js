import Responsive from './Responsive';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import { ReactComponent as Battery } from '../../assets/images/Battery.svg';
import { ReactComponent as Wifi } from '../../assets/images/Wifi.svg';
import { ReactComponent as Signal } from '../../assets/images/Cellular Connection.svg';
import Logo from '../../assets/images/logo.svg';
import DarkMode from '../../assets/images/dark_mode.svg';
import { ReactComponent as About } from '../../assets/images/about.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { changeTheme } from '../../redux/theme';
import { NavLink } from 'react-router-dom';
import { useLocation } from '../../../node_modules/react-router/index';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
`;

const Wrapper = styled(Responsive)`
  header {
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
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.1rem;
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

const Spacer = styled.div`
  height: 7.9rem;
`;

const AboutIcon = styled(About)`
  margin-left: 0.3rem;
  margin-top: 0.2rem;
`;

const time = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const now = `${hour}:${min < 10 ? `0${min}` : min}`;
  return now;
};

const Header = () => {
  const dispatch = useDispatch();

  const Toggle = useCallback(() => {
    dispatch(changeTheme());
  }, [dispatch]);

  const theme = useSelector((state) => state.theme.mode);

  const { pathname } = useLocation();

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <header>
            <div className="top-bar">
              <div className="top-time">{time()}</div>
              <div className="top-icon">
                <Signal fill={theme.iconColor} alt="signal" />
                <Wifi
                  fill={theme.iconColor}
                  alt="wifi"
                  style={{ margin: '0 5px 0 5px' }}
                />
                <Battery
                  fill={theme.iconColor}
                  stroke={theme.iconColor}
                  alt="Battery"
                />
              </div>
            </div>
            <div className="title">
              <img src={Logo} alt="svelte-logo" />
              <h1>Svelte Hacker News</h1>
              <img src={DarkMode} alt="dark-mode" onClick={Toggle} />
              <NavLink to="/about">
                <AboutIcon fill={pathname === '/about' ? '#b7b7b7' : '#fff'} />
              </NavLink>
            </div>
          </header>
          <NavMenu />
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
