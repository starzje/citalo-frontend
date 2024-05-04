import React from 'react';
import { getStaticPaths } from '@/lib/getStaticPathsPosts';
import { getStaticProps } from '@/lib/getStaticPropsIndividualPosts';
import { SinglePostProps } from '@/types';
import { FC } from 'react';
import { Container, PodstranicaBloga } from 'src/components';

const Post: FC<SinglePostProps> = ({ post }) => {
  return (
    <Container>
      <PodstranicaBloga
        post={post}
        pageSeoDescription="Recenzije knjiga koje sam nedavno pročitala i raznovrsne preporuke za čitanje."
        pageSeoTitle="Čitalo - Recenzija knjige"
      />
    </Container>
  );
};

export default Post;

export { getStaticPaths };
export { getStaticProps };
