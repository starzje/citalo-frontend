import { MENI } from '@/constants';
import Link from 'next/link';
import { FC } from 'react';
import logo_citalo from '/public/logo_citalo.png';
import logo from '/public/logo.png';
import Image from 'next/image';
import { Twirl as Hamburger } from 'hamburger-react';
import { MobileMenuProps } from '@/types';
import { useRouter } from 'next/router';

const Nav: FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  return (
    <header className="container mx-auto flex items-center relative justify-between h-[85px] py-5 px-4  ">
      <Image
        className="w-[60px] absolute -bottom-4 left-[44%] md:left-[12%] "
        src={logo}
        alt="logo"
        width={60}
      />
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
      <p className="hidden md:inline-block border font-light text-dark-brown border-black p-2 rounded-2xl">
        Danas čitam:{' '}
        <span className=" text-dark-brown">Stoner - John E. Williams </span>
      </p>
      <nav>
        <ul className="hidden md:flex items-center space-x-1">
          {MENI.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  className={` ${
                    router.pathname === item.putanja
                      ? 'bg-dark-brown text-white'
                      : ''
                  } px-2 py-1 rounded-2xl hover:bg-dark-brown hover:text-white transition duration-300 font-base`}
                  href={item.putanja}
                >
                  {item.naslov}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="md:hidden inline-block">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
    </header>
  );
};

export default Nav;
