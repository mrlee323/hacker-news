import Responsive from './Responsive';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import Battery from '../../assets/images/Battery.svg';
import Wifi from '../../assets/images/Wifi.svg';
import Signal from '../../assets/images/Cellular Connection.svg';
import Logo from '../../assets/images/logo.svg';
import DarkMode from '../../assets/images/dark_mode.svg';
import About from '../../assets/images/contact_support.svg';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
`;

const Wrapper = styled(Responsive)`
  header {
    height: 87px;
    background: #ed702d;
    padding: 15px 15px 14px 24px;
    box-sizing: border-box;

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-time {
        font-weight: bold;
        font-size: 15px;
        margin-left: 5px;
      }
      .top-icon {
        img {
          margin-left: 4px;
        }
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 17px;
      img {
        &:nth-child(1) {
          margin-right: 5px;
        }
        &:nth-child(3) {
          margin-right: 10px;
        }
        &:nth-child(4) {
          margin-right: 5px;
        }
      }
      h1 {
        flex: 1;
        font-weight: 500;
        font-size: 20px;
        color: white;
      }
    }
  }
`;

const Spacer = styled.div`
  height: 126px;
`;

const time = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const now = `${hour}:${min < 10 ? `0${min}` : min}`;
  return now;
};

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <header>
            <div className="top-bar">
              <div className="top-time" style={{}}>
                {time()}
              </div>
              <div className="top-icon">
                <img src={Signal} alt="signal" />
                <img src={Wifi} alt="Wifi" />
                <img src={Battery} alt="Battery" />
              </div>
            </div>
            <div className="title">
              <img src={Logo} alt="logo" />
              <h1>Svelte Hacker News</h1>
              <img src={DarkMode} alt="dark-mode" />
              <img src={About} alt="about" />
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
