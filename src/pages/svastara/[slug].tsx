import React from 'react';
import { getStaticPaths } from '@/lib/getStaticPathsSvastara';
import { getStaticProps } from '@/lib/getStaticPropsIndividualSvastara';
import { SvastaraSinglePostProps } from '@/types';
import { FC } from 'react';
import { Container, PodstranicaSvastara } from 'src/components';

const SvastaraPost: FC<SvastaraSinglePostProps> = ({ post }) => {
  return (
    <Container>
      <PodstranicaSvastara
        post={post}
        pageSeoDescription="Blog o svemu i svačemu."
        pageSeoTitle="Čitalo - Svaštara o svemu i svačemu"
      />
    </Container>
  );
};

export default SvastaraPost;

export { getStaticPaths };
export { getStaticProps };
