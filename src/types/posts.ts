import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Dispatch, SetStateAction } from 'react';
import { Image } from './shared';

/**
 * types/posts.ts
 * interface file koj je vezan za sve postove/querije o postovima
 */

/**
 * @interface SinglePostProps
 * @property {object} post - An object containing the post data
 * @property {string} post.title - The title of the post
 * @property {MDXRemoteSerializeResult} post.content - An object containing the parsed and serialized content of the post
 * @property {string} post.category - The category of the post
 * @property {string} post.image - The url of the post's featured image
 */
export interface SinglePostProps {
  post: {
    title: string;
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    category: string;
    introduction: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    description: string;
    subtitle: string;
    brojstranica: string;
    image: string;
    translation: string;
  };
}

export interface SvastaraSinglePostProps {
  post: {
    title: string;
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    description: string;
    image: string;
  };
}

/**
 * @interface PostSlugProps
 * @property {object} attributes - An object containing the post's attributes
 * @property {string} attributes.slug - The unique identifier for the post
 */
export interface PostSlugProps {
  attributes: {
    slug: string;
  };
}

/**
 * @interface AllPostsProps
 * @property {string} id - The unique identifier for the post
 * @property {object} attributes - An object containing the post's attributes
 * @property {string} attributes.title - The title of the post
 * @property {string} attributes.datum - The date the post was published
 * @property {string} attributes.content - The content of the post
 * @property {string} attributes.description - The post's description
 * @property {string} attributes.slug - The unique identifier for the post
 * @property {string} attributes.category - The category the post belongs to
 * @property {Image} attributes.image - The featured image of the post
 */
export interface AllPostsProps {
  id: string;
  attributes: {
    title: string;
    datum: string;
    content: string;
    description: string;
    slug: string;
    category: string;
    image: Image;
    subtitle?: string;
  };
}

/**
 * @interface AllSvastaraProps
 * @property {string} id - The unique identifier for the post
 * @property {object} attributes - An object containing the post's attributes
 * @property {string} attributes.title - The title of the post
 * @property {string} attributes.datum - The date the post was published
 * @property {string} attributes.content - The content of the post
 * @property {string} attributes.description - The post's description
 * @property {string} attributes.slug - The unique identifier for the post
 * @property {Image} attributes.image - The featured image of the post
 */
export interface AllSvastaraProps {
  id: string;
  attributes: {
    title: string;
    datum: string;
    content: string;
    description: string;
    slug: string;
    image: Image;
  };
}

/**
 * @interface ArticleProps
 * @property {AllPostsProps[]} posts - An array of objects that contain the properties of all posts.
 * @property {(value: string) => void} [setSearchTerm] - A callback function that sets the value of searchTerm.
 * @property {string} searchTerm - The current search term.
 */
export interface ArticleProps {
  posts: AllPostsProps[];
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  searchTerm: string;
  pathprefix?: 'recenzije' | 'svastara';
}

/**
 * @interface StranicaBlogaProps
 * @property {AllPostsProps[]} posts - An array of all post objects
 * @property {React.Dispatch<React.SetStateAction<string>>} setSearchTerm - A function for setting the search term
 * @property {string} searchTerm - The current search term
 * @property {string} pageSeoTitle - The title to be used in the page's SEO meta tags
 * @property {string} pageSeoDescription - The description to be used in the page's SEO meta tags
 * @property {string} title - The title of the blog page
 * @property {string} description - The description of the blog page
 * @property {'recenzije' | 'svastara'} pathPrefix - The prefix for the path of the blog page
 */
export interface StranicaBlogaProps {
  posts: AllPostsProps[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  pageSeoTitle: string;
  pageSeoDescription: string;
  title: string;
  description: string;
  pathPrefix: 'recenzije' | 'svastara';
}

/**
 * @interface PodStranicaBlogaProps
 * @property {string} pageSeoTitle - The title to be used in the SEO meta tags for the page.
 * @property {string} pageSeoDescription - The description to be used in the SEO meta tags for the page.
 */
export interface PodStranicaBlogaProps extends SinglePostProps {
  pageSeoTitle: string;
  pageSeoDescription: string;
}

/**
 * @interface PodStranicaBlogaSvastaraProps
 * @property {string} pageSeoTitle - The title to be used in the SEO meta tags for the page.
 * @property {string} pageSeoDescription - The description to be used in the SEO meta tags for the page.
 */
export interface PodStranicaBlogaSvastaraProps extends SvastaraSinglePostProps {
  pageSeoTitle: string;
  pageSeoDescription: string;
}
