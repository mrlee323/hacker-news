import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Result } from '../../assets/images/filter=results.svg';
import { ReactComponent as Time } from '../../assets/images/filter=time.svg';
import { ReactComponent as Menu } from '../../assets/images/mode_menu.svg';
import { ReactComponent as List } from '../../assets/images/mode_list.svg';

const ModeBlock = styled.div`
  margin: 1.1rem 1.3rem;
  display: flex;
  div {
    flex: 1;
  }
`;

const Mode = () => {
  return (
    <ModeBlock>
      <div>
        <Result style={{ marginRight: '.5rem' }} />
        <Time />
      </div>
      <List />
      <Menu style={{ marginLeft: '.5rem' }} />
    </ModeBlock>
  );
};

export default Mode;
