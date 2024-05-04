import { MENI } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo_citalo from '/public/logo_citalo.png';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] shadow-md relative ">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-3 flex h-12 items-center space-x-2">
            <Link
              href="/"
              className=" flex justify-center items-center "
            >
              <Image
                className="w-[120px]"
                src={logo_citalo}
                alt="logo"
                width={120}
              />
            </Link>
          </div>
          <div className="text-gray-500">Danas čitam.</div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 select-none">
            Kontakt
          </div>
          <div className="text-gray-500 space-y-2">
            <a
              href="mailto:citalo.info@gmail.com"
              className="flex gap-2 items-center hover:text-dark-brown transition duration-300 font-light"
            >
              <HiOutlineMail /> citalo.info@gmail.com
            </a>
            <a
              href="https://www.instagram.com/_citalo_/"
              target="_blank"
              className="flex gap-2 items-center hover:text-dark-brown transition duration-300 font-light"
            >
              <FaInstagram /> _citalo_
            </a>
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 select-none">
            Navigacija
          </div>
          <nav
            aria-label="Footer Navigation"
            className="text-gray-500"
          >
            <ul className="space-y-3">
              {MENI.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      className={`py-1  hover:text-dark-brown transition duration-300 font-light`}
                      href={item.putanja}
                    >
                      {item.naslov}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 -ml-0 md:-ml-6 select-none  ">
            <div className="mt-4 mb-2 font-medium xl:mb-4 select-none">
              Website by:
            </div>
            <div className="space-y-2 text-gray-500   ">
              <a
                href="https://www.ivan-starcevic.com/"
                target="_blank"
                className="flex gap-2 pb-[0.5em] items-center  hover:text-dark-brown transition duration-300 font-light"
              >
                www.ivan-starcevic.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <p className="select-none">© 2023 Čitalo | Sva prava pridržana</p>
          <div className="">
            <Link
              className="hover:text-dark-brown transition duration-300 font-light"
              href="/uvjeti-koristenja"
            >
              Uvjeti korištenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
