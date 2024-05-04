import React from 'react';
import { FC } from 'react';
import { Container, SEO, IstaknuteRecenzije, Hero } from 'src/components';
import { getStaticProps } from '@/lib/getStaticPropsNaslovna';
import { NaslovnaProps } from '@/types';

const Home: FC<NaslovnaProps> = ({ recenzije, nedavnipostovi }) => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo Books"
        pageDescription="Blog o knjigama i čitanju, te recenziji knjiga"
      />

      <Hero />
      <IstaknuteRecenzije
        recenzije={recenzije}
        nedavnipostovi={nedavnipostovi}
      />
    </Container>
  );
};

export default Home;

export { getStaticProps };
