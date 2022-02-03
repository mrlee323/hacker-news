import React from 'react';
import styled from 'styled-components';
import Result from '../../assets/images/filter=results.svg';
import Time from '../../assets/images/filter=time.svg';
import { ReactComponent as Menu } from '../../assets/images/mode_menu.svg';
import { ReactComponent as List } from '../../assets/images/mode_list.svg';

const ModeBlock = styled.div`
  margin: 1.1rem 1.25rem;
  display: flex;
  .sort {
    flex: 1;
  }
`;

const Mode = ({ onClick, ...rest }) => {
  return (
    <ModeBlock {...rest}>
      <div className="sort">
        <img
          src={Result}
          alt="Result"
          style={{ marginRight: '.5rem' }}
          onClick={onClick}
        />
        <img src={Time} alt="Time" onClick={onClick} />
      </div>
      <div>
        <List />
        <Menu style={{ marginLeft: '.5rem' }} />
      </div>
    </ModeBlock>
  );
};

export default Mode;
