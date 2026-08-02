import {
  GET_ISTAKNUTE_RECENZIJE,
  GET_NEDAVNI_POSTOVI,
} from '@/graphql/queries';
import { client } from './apollo-client';
import { fetchTrenutnaKnjiga } from './fetchTrenutnaKnjiga';

/**
 * @async
 * @function
 * @returns {object} - an object containing the recenzije and nedavnipostovi data
 * Fetches and returns data from the GraphQL API using two queries, GET_ISTAKNUTE_RECENZIJE and GET_NEDAVNI_POSTOVI,
 * and assigns them to the recenzije and nedavnipostovi props respectively.
 */
export async function getStaticProps() {
  try {
    const [{ data: data1 }, { data: data2 }, trenutnaKnjiga] =
      await Promise.all([
        client.query({ query: GET_ISTAKNUTE_RECENZIJE }),
        client.query({ query: GET_NEDAVNI_POSTOVI }),
        fetchTrenutnaKnjiga(),
      ]);

    return {
      props: {
        recenzije: data1.istaknuterecenzijes.data,
        nedavnipostovi: data2.nedavnipostovis.data,
        trenutnaKnjiga,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        recenzije: [],
        nedavnipostovi: [],
        trenutnaKnjiga: null,
      },
    };
  }
}
