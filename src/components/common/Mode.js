import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Menu } from '../../assets/images/mode_menu.svg';
import { ReactComponent as List } from '../../assets/images/mode_list.svg';

const ModeBlock = styled.div`
  display: flex;
`;

const Mode = ({ onClick, ...rest }) => {
  return (
    <ModeBlock>
      <List />
      <Menu style={{ marginLeft: '.5rem' }} />
    </ModeBlock>
  );
};

export default Mode;
