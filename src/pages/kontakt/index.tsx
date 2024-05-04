import { Container, SEO } from 'src/components';
import React from 'react';
import { FC } from 'react';
import Image from 'next/image';

const kontakt: FC = () => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo - Kontakt"
        pageDescription="Ovdje me možete kontaktirati za sve što vas zanima."
      />
      <div className="relative pt-10 px-20 leading-loose">
        <h2 className="text-4xl text-center font-bold leading-tight text-dark-brown">
          Dragi posjetitelju...
        </h2>
        <p className="text-center pt-5">
          Ukoliko za mene imaš neko pitanje, prijedlog za suradnju ili komentar,
          <br /> slobodno mi se javi klikom na mail:{' '}
          <span className=" text-dark-brown font-semibold">
            <a
              className=""
              href="mailto:citalo.info@gmail.com"
            >
              citalo.info@gmail.com
            </a>
          </span>
        </p>

        <p className="text-center">
          Možeš mi se javiti i privatnom porukom na <br /> Čitalo Instagram
          profil:
          <span className=" text-dark-brown font-semibold">
            <a
              className=""
              href="https://www.instagram.com/_citalo_/"
              target="_blank"
            >
              {' '}
              @_citalo_
            </a>
          </span>
        </p>
        <div className="w-full pt-6 ">
          <Image
            className=" w-[40em] mx-auto border-[15px] border-light-brown shadow-md rounded-xl"
            src="/kontakt.jpg"
            alt="slika s knjigom"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default kontakt;
