import { gql } from '@apollo/client';

/**
 * @query GET_ALL_SLUGS
 * @desc Get all the slugs of the posts
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains the slug of the post.
 */
const GET_ALL_SLUGS = gql`
  query {
    posts(pagination: { limit: 150 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

/**
 * @query GET_ALL_SLUGS_SVASTARA
 * @desc Get all the slugs of the posts from svastara
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains the slug of the post.
 */
const GET_ALL_SLUGS_SVASTARA = gql`
  query {
    svastaras(pagination: { limit: 150 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

/**
 * @query GET_ALL_POSTS
 * @desc Get all the posts
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as date, title, content, description, category, slug and image.
 */
const GET_ALL_POSTS = gql`
  query {
    posts(pagination: { limit: 150 }) {
      data {
        id
        attributes {
          datum
          title
          content
          description
          category
          introduction
          brojstranica
          subtitle
          translation
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * @query GET_ALL_POSTS_SVASTARA
 * @desc Get all the posts for svastara
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as date, title, content, description, category, slug and image.
 */
const GET_ALL_POSTS_SVASTARA = gql`
  query {
    svastaras(pagination: { limit: 150 }) {
      data {
        id
        attributes {
          datum
          title
          content
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * @query GET_INDIVIDUAL_POST
 * @desc Get an individual post by its slug
 * @param {String} slug - the slug of the post
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as date, title, content, description, category, slug and image.
 */
const GET_INDIVIDUAL_POST = gql`
  query ($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          datum
          title
          subtitle
          content
          description
          category
          translation
          introduction
          brojstranica
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * @query GET_INDIVIDUAL_POST_SVASTARA
 * @desc Get an individual post by its slug for svastara
 * @param {String} slug - the slug of the post
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as date, title, content, description, category, slug and image.
 */
const GET_INDIVIDUAL_POST_SVASTARA = gql`
  query ($slug: String!) {
    svastaras(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          datum
          title
          content
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * @query GET_ISTAKNUTE_RECENZIJE
 * @desc Get all the featured reviews
 * @returns {Object} - an object with data property, which contains an array of review objects, where each object has attributes property that contains all the information of the review such as title, author, description, slug, image, tags and publisher.
 */
const GET_ISTAKNUTE_RECENZIJE = gql`
  query {
    istaknuterecenzijes {
      data {
        id
        attributes {
          title
          author
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
          tags
          category
        }
      }
    }
  }
`;

/**
 * @query GET_NEDAVNI_POSTOVI
 * @desc Get all the recent posts
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as title, author, description, slug, publisher, tags and image.
 */
const GET_NEDAVNI_POSTOVI = gql`
  query {
    nedavnipostovis {
      data {
        id
        attributes {
          title
          author
          description
          slug
          slugprefix
          category
          tags
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export {
  GET_ALL_POSTS,
  GET_INDIVIDUAL_POST,
  GET_ALL_SLUGS,
  GET_ISTAKNUTE_RECENZIJE,
  GET_NEDAVNI_POSTOVI,
  GET_INDIVIDUAL_POST_SVASTARA,
  GET_ALL_POSTS_SVASTARA,
  GET_ALL_SLUGS_SVASTARA,
};
