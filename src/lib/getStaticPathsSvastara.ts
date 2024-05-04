import { PostSlugProps } from '@/types';
import { GET_ALL_SLUGS_SVASTARA } from '../graphql/queries';
import { client } from './apollo-client';

/**
 * Retrieves all of the unique slugs for the blog posts from the API and returns them as an array of paths.
 * @return {Object} - An object containing the array of paths and a fallback flag.
 * @async
 */
export async function getStaticPaths() {
  try {
    const { data } = await client.query({
      query: GET_ALL_SLUGS_SVASTARA,
      variables: {
        first: 50,
      },
    });

    const paths = data.svastaras.data.map((post: PostSlugProps) => {
      return { params: { slug: post.attributes.slug } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
    return {
      paths: [],
      fallback: false,
    };
  }
}
