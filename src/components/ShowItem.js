import React from 'react';
import ListBox from './common/ListBox';
import ListUser from './common/ListUser';

const ShowItem = ({ shows }) => {
  return (
    <>
      {shows &&
        shows.map((item, index) => (
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

export default ShowItem;
