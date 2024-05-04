import { PodStranicaBlogaSvastaraProps } from '@/types';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
import { SEO, SvgDivider } from 'src/components';

const PodstranicaSvastara: FC<PodStranicaBlogaSvastaraProps> = ({
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

      <div className=" gap-10 relative px-3 md:px-20 pb-20">
        <h2 className="text-4xl text-center font-bold leading-tight pb-6 text-dark-brown">
          {post.title}
        </h2>
        <div className="w-full  ">
          <Image
            className="h-auto md:h-[35em] w-full object-cover border-[15px] rounded-lg  border-light-brown"
            alt={'Fotografija knjige'}
            src={post.image as string}
            width={500}
            height={500}
          />
        </div>

        <SvgDivider
          firstColor="#e7e5e4"
          secondColor="#EDECEC"
          thirdColor="#EDECEC"
          fourthColor="#e7e5e4"
        />
      </div>
      <div className="bg-[#e7e5e4] relative px-3 md:px-20 pb-10">
        <div className="font-light  leading-loose sadrzaj--postova text-justify">
          <MDXRemote {...post.content} />
        </div>
      </div>
    </div>
  );
};

export default PodstranicaSvastara;
