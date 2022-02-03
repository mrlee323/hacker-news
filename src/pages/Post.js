import React from 'react';
import CardBox from '../components/common/CardBox';
import CardUser from '../components/common/CardUser';
import PostContainer from '../container/PostContainer';

const Post = () => {
  return (
    <section className="post">
      <PostContainer />
    </section>
  );
};

export default React.memo(Post);
