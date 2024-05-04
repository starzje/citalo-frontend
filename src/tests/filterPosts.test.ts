import { filterPosts, filterPostsInput } from '../lib/filterPosts';
import { AllPostsProps } from '@/types';

/**
 * An array of posts (mock data) to use for testing.
 */
const posts: AllPostsProps[] = [
  {
    id: '1',
    attributes: {
      title: 'Post 1',
      datum: '2021-01-01',
      content: 'Content of post 1',
      description: 'Description of post 1',
      slug: 'post-1',
      category: 'category 1',
      image: {
        data: {
          attributes: {
            url: 'image1.jpg',
          },
        },
      },
    },
  },
  {
    id: '2',
    attributes: {
      title: 'Post 2',
      datum: '2021-01-02',
      content: 'Content of post 2',
      description: 'Description of post 2',
      slug: 'post-2',
      category: 'category 2',
      image: {
        data: {
          attributes: {
            url: 'image1.jpg',
          },
        },
      },
    },
  },
];

/**
 * Test suite for the filterPosts and filterPostsInput functions.
 * The 'filterPosts' function filters an array of posts based on the search term provided. If the search term is empty, the original array of posts is returned.
 * The 'filterPostsInput' function filters an array of posts based on the search term provided, and returns the first 4 matches. If the search term is empty, the original array of posts is returned.
 * This test suite checks that the functions are correctly filtering posts based on the search term provided and returning the correct number of matches and that if the search term is empty, the original array of posts is returned
 */
describe('filterPosts', () => {
  it('should filter posts based on search term', () => {
    const filteredPosts = filterPosts(posts, 'post 1');
    expect(filteredPosts.length).toBe(1);
    expect(filteredPosts[0]).toEqual(posts[0]);
  });

  it('should return original array if search term is empty', () => {
    const filteredPosts = filterPosts(posts, '');
    expect(filteredPosts).toEqual(posts);
  });
});

describe('filterPostsInput', () => {
  it('should filter posts based on search term and return first 4 matches', () => {
    const filteredPosts = filterPostsInput(posts, 'post');
    expect(filteredPosts.length).toBe(2);
    expect(filteredPosts).toEqual(posts);
  });

  it('should return original array if search term is empty', () => {
    const filteredPosts = filterPostsInput(posts, '');
    expect(filteredPosts).toEqual(posts);
  });
});
