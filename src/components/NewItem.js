import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import ListBox from './common/ListBox';
import ListUser from './common/ListUser';

const NewItemBlcok = styled(Responsive)`
  margin-top: 1.25rem;
`;

const NewItem = ({ news }) => {
  return (
    <NewItemBlcok>
      {news &&
        news.map((item, index) => (
          <ListBox kewy={index}>
            <a href={`${item.url}`} target="_blank" rel="noreferrer">
              <h3>{item.title}</h3>
            </a>
            <ListUser
              id={item.by}
              point={item.score}
              time={item.time}
              descendants={item.descendants}
            />
          </ListBox>
        ))}
    </NewItemBlcok>
  );
};

export default NewItem;
