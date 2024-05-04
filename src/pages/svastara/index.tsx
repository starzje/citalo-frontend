import { AllPostsProps } from '@/types';
import { useState, FC } from 'react';
import { getStaticProps } from '@/lib/getStaticPropsAllSvastara';
import { Container, StranicaBloga } from 'src/components';

const Svastara: FC<{ posts: AllPostsProps[] }> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <StranicaBloga
        title="Svaštara"
        description="Nećemo se lagati, svi doma imamo barem jednu ladicu u koju guramo one stvari koje ne znamo gdje smjestiti. Svaštara će biti jedna takva ladica, ispunjena preporukama, dojmovima, idejama i prijedlozima. Zajednička nit - knjige."
        pageSeoDescription="Svaštara o svemu i svačemu."
        pageSeoTitle="Čitalo - Svaštara"
        pathPrefix="svastara"
        posts={posts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </Container>
  );
};

export default Svastara;

export { getStaticProps };
