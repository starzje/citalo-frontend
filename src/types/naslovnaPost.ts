import { Image, Tags } from './shared';

/**
 * types/naslovnaPost.ts
 * interface file koj je vezan za postove na naslovnoj stranici
 */

/**
 * @interface RecenzijaProps
 * @property {string} id - The unique identifier for the review
 * @property {object} attributes - An object containing the review's attributes
 * @property {string} attributes.title - The title of the review
 * @property
 */
export interface RecenzijaProps {
  id: string;
  attributes: {
    title: string;
    author: string;
    description: string;
    slug: string;
    slugprefix?: 'recenzije' | 'svastara' | undefined;
    image: Image;
    tags: Tags[];
    category: string;
  };
}

/**
 * @interface IstaknuteRecenzijeElementProps
 * @property {IstaknuteRecenzijeProps} recenzija - An object that contains the properties of an istaknuta recenzija.
 * @property {'recenzije' | 'svastara'} path - Indicates the path of the current page.
 */
export interface IstaknuteRecenzijeElementProps {
  recenzija: RecenzijaProps;
  path: 'recenzije' | 'svastara' | null;
}

/**
 * @interface IstaknuteRecenzijeProps
 * @property {RecenzijaProps[]} recenzije - An array of RecenzijaProps objects
 * @property {NedavniPostoviProps[]} nedavnipostovi - An array of NedavniPostoviProps objects
 */
export interface IstaknuteRecenzijeProps {
  recenzije: RecenzijaProps[];
  nedavnipostovi: NedavniPostoviProps[];
}

/**
 * @interface NaslovnaProps
 * @property {RecenzijaProps[]} recenzije - An array of RecenzijaProps objects
 * @property {NedavniPostoviProps[]} nedavnipostovi - An array of NedavniPostoviProps objects
 */
export interface NaslovnaProps {
  recenzije: RecenzijaProps[];
  nedavnipostovi: NedavniPostoviProps[];
}

/**
 * Represents the shape of data for a single recent post, as returned by the GET_NEDAVNI_POSTOVI query.
 * @interface NedavniPostoviProps
 * @property {string} id - The unique identifier for the post.
 * @property {Object} attributes - The attributes of the post.
 * @property {string} attributes.title - The title of the post.
 * @property {string} attributes.author - The author of the post.
 * @property {string} attributes.description - A short description of the post.
 * @property {string} attributes.slug - A unique string identifier for the post, used in URLs.
 * @property {string} attributes.category - The publisher of the post.
 * @property {Tags[]} attributes.tags - An array of tags associated with the post.
 * @property {Image} attributes.image - An object containing the image associated with the post.
 */
export interface NedavniPostoviProps {
  id: string;
  attributes: {
    title: string;
    author: string;
    description: string;
    slug: string;
    category: string;
    tags: Tags[];
    image: Image;
  };
}
