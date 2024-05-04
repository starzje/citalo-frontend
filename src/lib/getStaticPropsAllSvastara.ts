import { GET_ALL_POSTS_SVASTARA } from '@/graphql/queries';
import { AllSvastaraProps } from '@/types';
import { client } from './apollo-client';

/**
 * @function
 * @async
 * @returns {Object} An object containing the data of all posts
 * @throws {ApolloError} When the GraphQL query fails to execute
This function is responsible for fetching all the posts data and returning it as a prop to be consumed by other components
*/
export async function getStaticProps() {
  try {
    const { data } = await client.query({
      query: GET_ALL_POSTS_SVASTARA,
      variables: {
        first: 50,
      },
    });

    // Sort the data by date property
    const sortedPosts = [...data.svastaras.data].sort(
      (a: AllSvastaraProps, b: AllSvastaraProps) => {
        return (
          new Date(b.attributes.datum).getTime() -
          new Date(a.attributes.datum).getTime()
        );
      }
    );

    return {
      props: {
        posts: sortedPosts,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        posts: [],
      },
    };
  }
}
