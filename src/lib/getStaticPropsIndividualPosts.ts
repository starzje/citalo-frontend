import { GET_INDIVIDUAL_POST } from '@/graphql/queries';
import { client } from './apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { fetchTrenutnaKnjiga } from './fetchTrenutnaKnjiga';

/**
 * Retrieves the data for an individual post from the API and returns it as a prop.
 * @async
 * @function
 * @param {Object} params - An object containing the slug of the post to retrieve.
 * @returns {Object} An object containing the data of an individual post
 */
export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const [{ data }, trenutnaKnjiga] = await Promise.all([
      client.query({
        query: GET_INDIVIDUAL_POST,
        variables: { slug: params.slug },
      }),
      fetchTrenutnaKnjiga(),
    ]);

    const attributes = data.posts.data[0].attributes;
    const html = await serialize(attributes.content);
    const introductionHtml = await serialize(attributes.introduction);

    return {
      props: {
        post: {
          title: attributes.title,
          content: html,
          category: attributes.category,
          description: attributes.description,
          image: attributes?.image?.data?.attributes?.url,
          brojstranica: attributes.brojstranica,
          subtitle: attributes.subtitle,
          introduction: introductionHtml,
          translation: attributes.translation,
        },
        trenutnaKnjiga,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        post: null,
        trenutnaKnjiga: null,
      },
    };
  }
}
