import React from 'react';
import ListBox from './common/ListBox';
import ListUser from './common/ListUser';
import CardBox from './common/CardBox';
import CardUser from './common/CardUser';

const PostItem = ({ posts }) => {
  return (
    <div className="post">
      {posts &&
        posts.map((post, index) => (
          <ListBox key={index}>
            <a href={`${post.url}`} target="_blank" rel="noreferrer">
              <h3>{post.title}</h3>
            </a>
            <ListUser
              id={post.by}
              point={post.score}
              time={post.time}
              descendants={post.descendants}
            />
          </ListBox>
        ))}
    </div>
  );
};

export default PostItem;
