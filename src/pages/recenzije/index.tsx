import { AllPostsProps } from '@/types';
import { useState, FC } from 'react';
import { getStaticProps } from '@/lib/getStaticPropsAllPosts';
import { Container, StranicaBloga } from 'src/components';

const Posts: FC<{ posts: AllPostsProps[] }> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <StranicaBloga
        title="Recenzije"
        description="Što ti Čitalo nudi? Ovdje ćeš pronaći dojmove o knjigama koje sam
            nedavno pročitala i raznovrsne preporuke za čitanje, a najviše od
            svega ti želim da u moru blještavih korica i tajanstvenih naslova
            pronađeš savršenu knjigu za sebe."
        pageSeoDescription="Recenzije knjiga koje sam nedavno pročitala i raznovrsne preporuke za čitanje."
        pageSeoTitle="Čitalo - Recenzije"
        pathPrefix="recenzije"
        posts={posts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </Container>
  );
};

export default Posts;

export { getStaticProps };
