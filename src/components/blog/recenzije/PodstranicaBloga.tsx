import { PodStranicaBlogaProps } from '@/types';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
import { SEO, SvgDivider } from 'src/components';

const PodstranicaBloga: FC<PodStranicaBlogaProps> = ({
  post,
  pageSeoDescription,
  pageSeoTitle,
}) => {
  return (
    <div className="relative pt-10 ">
      <SEO
        pageTitle={`${pageSeoTitle}: ${post.title}`}
        pageDescription={pageSeoDescription}
      />

      <div className=" flex flex-col md:flex-row gap-10 relative px-3 md:px-20 pb-20">
        <h2 className="block md:hidden text-4xl text-center font-bold leading-tight text-dark-brown">
          {post.title} <br />
          {post.subtitle && <span>({post.subtitle})</span>}
        </h2>
        <div className="w-full my-auto md:w-1/2 ">
          <Image
            className="h-[35em] w-full object-cover border-[15px] rounded-lg  border-light-brown"
            alt={'Fotografija knjige'}
            src={post.image as string}
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2 font-[300] flex flex-col  items-center">
          <h2 className="hidden md:block text-4xl text-center font-bold leading-tight  text-dark-brown">
            {post.title}
          </h2>
          <h2 className="hidden md:block text-3xl text-center font-bold leading-tight  text-dark-brown">
            {post.subtitle && <span>({post.subtitle})</span>}
          </h2>
          <div className="text-center text-black/60 py-4 ">
            <p>Nakladnik: {post.category}</p>
            {post.translation && <p>Prijevod: {post.translation}</p>}

            <p>Broj stranica: {post.brojstranica}</p>
          </div>
          <div className="hidden md:inline-block  font-light  leading-loose sadrzaj--postova text-justify">
            <MDXRemote {...post.introduction} />
          </div>
        </div>
        <SvgDivider
          firstColor="#e7e5e4"
          secondColor="#EDECEC"
          thirdColor="#EDECEC"
          fourthColor="#e7e5e4"
        />
      </div>
      <div className="bg-[#e7e5e4] relative px-3 md:px-20 pb-10">
        <div className="md:hidden inline-block  font-light  leading-loose sadrzaj--postova text-justify">
          <MDXRemote {...post.introduction} />
        </div>
        <div className="font-light  leading-loose sadrzaj--postova text-justify">
          <MDXRemote {...post.content} />
        </div>
      </div>
    </div>
  );
};

export default PodstranicaBloga;
