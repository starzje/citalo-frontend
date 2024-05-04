/**
 * This is an index file for exporting multiple type interfaces from different files.
 * It exports all interfaces from the following files:
 *  @module Interfaces
 * './posts' exports @interface SinglePostProps @interface PostSlugProps @interface AllPostsProps @interface ArticleProps @interface StranicaBlogaProps @interface PodStranicaBlogaProps
 * './naslovnaPost' exports @interface IstaknuteRecenzijeProps @interface IstaknuteRecenzijeElementProps @interface NedavniPostoviProps
 * './mobileMenu' exports @interface MobileMenuProps
 * './shared' exports @types Image @types Tags
 */

export * from './posts';
export * from './naslovnaPost';
export * from './mobileMenu';
export * from './shared';
