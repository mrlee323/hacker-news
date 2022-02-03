import React from 'react';
import ListBox from '../components/common/ListBox';
import ListUser from '../components/common/ListUser';
import CardBox from '../components/common/CardBox';
import CardUser from '../components/common/CardUser';

const Post = ({ posts }) => {
  return (
    <div className="post">
      {posts &&
        posts.map((post, index) => (
          <ListBox>
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

export default React.memo(Post);
