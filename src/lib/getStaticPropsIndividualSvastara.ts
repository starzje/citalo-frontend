import { GET_INDIVIDUAL_POST_SVASTARA } from '@/graphql/queries';
import { client } from './apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { SinglePostProps } from '@/types';

/**
 * Retrieves the data for an individual post from the API and returns it as a prop.
 * @async
 * @function
 * @param {Object} params - An object containing the slug of the post to retrieve.
 * @returns {Object} An object containing the data of an individual post
 */
export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const { data } = await client.query({
      query: GET_INDIVIDUAL_POST_SVASTARA,
      variables: { slug: params.slug },
    });

    const attributes = data.svastaras.data[0].attributes;
    const html = await serialize(attributes.content);

    return {
      props: {
        post: {
          title: attributes.title,
          content: html,
          image: attributes?.image?.data?.attributes?.url,
        },
      } as SinglePostProps,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        post: null,
      },
    };
  }
}
