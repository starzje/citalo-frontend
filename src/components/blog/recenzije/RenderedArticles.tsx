import { filterPosts } from '@/lib/filterPosts';
import { ArticleProps } from '@/types';
import React, { FC } from 'react';
import Article from './Article';

const RenderedArticles: FC<ArticleProps> = ({
  posts,
  searchTerm,
  pathprefix,
}) => {
  // Filters the posts based on the search term
  const filteredPosts = filterPosts(posts, searchTerm);

  return (
    <React.Fragment>
      {filteredPosts.map((post) => (
        <Article
          key={post.id}
          pathprefix={pathprefix}
          posts={post}
        />
      ))}
    </React.Fragment>
  );
};

export default RenderedArticles;
