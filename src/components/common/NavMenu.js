import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  background: #fff;
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 12px 15px;
  font-size: 15px;
  font-weight: 700;
  color: #727272;
  text-align: center;
  text-decoration: none;
  &.active {
    color: #333;
    position: relative;
    &::after {
      content: '';
      width: 42px;
      height: 3px;
      background: #ed702d;
      position: absolute;
      bottom: 0;
      border-radius: 2px 2px 0 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;

const NavMenu = () => {
  return (
    <Menu>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/top">Top</StyledNavLink>
      <StyledNavLink to="/new">New</StyledNavLink>
      <StyledNavLink to="/show">Show</StyledNavLink>
      <StyledNavLink to="/ask">Ask</StyledNavLink>
      <StyledNavLink to="/job">Job</StyledNavLink>
    </Menu>
  );
};

export default NavMenu;
