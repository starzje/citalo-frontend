import { AllPostsProps } from '@/types';

/**
 * Filters an array of posts based on the search term provided. If the search term is empty, the original array of posts is returned.
 * @function
 * @param {AllPostsProps[]} posts - The array of posts to filter.
 * @param {string} searchTerm - The search term to filter the posts by.
 * @returns {AllPostsProps[]} - The filtered array of posts.
 */
export const filterPosts = (posts: AllPostsProps[], searchTerm: string) => {
  if (searchTerm === '') {
    return posts;
  }
  const filteredPosts = posts.filter((post) =>
    post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredPosts.length === 0 ? posts : filteredPosts;
};

/**
 * Filters an array of posts based on the search term provided, and returns the first 4 matches. If the search term is empty, the original array of posts is returned. Used for the search bar autocomplete suggestion below the input field.
 * @function
 * @param {AllPostsProps[]} posts - The array of posts to filter.
 * @param {string} searchTerm - The search term to filter the posts by.
 * @returns {AllPostsProps[]} - The filtered array of posts with the first 4 matches.
 */
export const filterPostsInput = (
  posts: AllPostsProps[],
  searchTerm: string
) => {
  return searchTerm === ''
    ? posts
    : posts
        .filter((post) =>
          post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 4);
};
