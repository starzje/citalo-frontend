import { StranicaBlogaProps } from '@/types';
import Link from 'next/link';
import React from 'react';
import { SEO, InputSearchBar, RenderedArticles } from 'src/components';

const StranicaBloga: React.FC<StranicaBlogaProps> = ({
  posts,
  setSearchTerm,
  searchTerm,
  pageSeoTitle,
  pageSeoDescription,
  title,
  description,
  pathPrefix,
}) => {
  return (
    <>
      <SEO
        pageTitle={pageSeoTitle}
        pageDescription={pageSeoDescription}
      />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative pt-10 pb-20">
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl text-center font-bold leading-tight mb-10 relative text-dark-brown">
            {title}
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            {description}
          </p>
        </div>
        <InputSearchBar
          posts={posts}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        {posts.length !== 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <RenderedArticles
              pathprefix={pathPrefix}
              posts={posts}
              searchTerm={searchTerm}
            />
          </div>
        ) : (
          <div className="text-center text-gray-500 md:text-lg">
            Ups! Ova stranica je (za sad) prazna. <br />
            <br />
            Vrati se na početnu stranicu: <br />
            <Link
              className="text-dark-brown font-bold hover:text-[#776a55]"
              href="/"
            >
              Naslovnica
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default StranicaBloga;
