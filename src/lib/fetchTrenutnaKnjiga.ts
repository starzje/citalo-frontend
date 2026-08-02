import { GET_TRENUTNA_KNJIGA } from '@/graphql/queries';
import { client } from './apollo-client';

export async function fetchTrenutnaKnjiga(): Promise<string | null> {
  try {
    const { data } = await client.query({ query: GET_TRENUTNA_KNJIGA });
    return data?.trenutnaKnjiga?.data?.attributes?.title ?? null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
