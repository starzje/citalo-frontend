/**
 * types/shared.ts
 * Types file koji exporta common propse koji se koriste u više interfacea
 */

/**
 * @typedef {Object} Image
 * @property {Object} data - The data property of the image.
 * @property {Object} attributes - The attributes of the image data.
 * @property {string} attributes.url - The url of the image.
 */
export type Image = {
  data: {
    attributes: {
      url: string;
    };
  };
};

/**
 * @typedef {Object} Tags
 * @property {string} tags - The tags for a post or review.
 */
export type Tags = {
  tags: string;
};
