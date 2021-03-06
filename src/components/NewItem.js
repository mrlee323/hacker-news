import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import ListBox from './common/ListBox';
import ListUser from './common/ListUser';

const NewItem = ({ news }) => {
  return (
    <>
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
    </>
  );
};

export default NewItem;
