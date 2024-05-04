import { Container } from 'src/components';
import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <Container>
      <div className="relative">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative py-20">
          <div className="mb-10 md:mb-16">
            <h4 className="text-4xl text-center font-bold leading-tight mb-10 relative text-black">
              404 ERROR :/
            </h4>
            <p className="text-xl text-center font-semibold leading-tight mb-10 relative ">
              Ova stranica ne postoji. <br />
              Vratite se na početnu stranicu.
            </p>
            <div className="w-full text-center">
              <Link
                className="bg-dark-brown text-white py-2 px-4 rounded-xl hover:bg-[rgb(116,97,89)] font-semibold text-lg"
                href="/"
              >
                Naslovnica
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
