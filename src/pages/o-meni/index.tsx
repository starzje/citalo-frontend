import { Container, SEO } from 'src/components';
import React from 'react';
import { FC } from 'react';
import Image from 'next/image';

const OMeni: FC = () => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo - O meni"
        pageDescription="Ovdje me možete upoznati malo bolje."
      />
      <div className=" flex flex-col md:flex-row gap-10 relative px-3 py-10 md:px-20 ">
        <h2 className="inline-block md:hidden text-4xl text-center font-bold leading-tight text-dark-brown">
          Tko se krije iza Čitala?
        </h2>
        <div className="w-full my-auto md:w-1/2 ">
          <Image
            className="h-[35em] w-full object-cover border-[15px] rounded-lg  border-light-brown"
            alt={'Fotografija knjige'}
            src="/ja.jpg"
            width={500}
            height={500}
          />
          <p className="text-center">
            <b>ČITALO </b>[m i sr] <br />
            DEFINICIJA: 1. hip. <em>onaj koji čita</em>
          </p>
        </div>
        <div className="w-full md:w-1/2 font-[300] flex flex-col  items-center">
          <h2 className="hidden md:inline-block text-4xl text-center font-bold leading-tight text-dark-brown">
            Tko se krije iza Čitala?
          </h2>
          <p className="  font-light  leading-loose  pt-0 md:pt-5  text-justify">
            Jedna Tamara sa zagrebačkom adresom, zaljubljena u knjige. Tamara
            koja je 13.01.2021. godine imala viška vremena za pisanje dojmova o
            pročitanim knjigama, pa ih je odlučila sačuvati i podijeliti s
            drugima stvorivši Instagram profil - Čitalo. Danas ta ista Tamara
            nema baš toliko vremena viška, ali je motivacija za dijeljenjem
            dojmova ogromna jer se oko Čitala okupila mala, ali moćna zajednica
            knjigoljubaca. (A sada ću se prebaciti na pisanje u prvom licu).
            Važno je reći da nisam stručna ponuditi vam recenzije na razini
            književnih kritičara niti je Čitalo zamišljeno na taj način. Prije
            svega vam nudim iskrene dojmove o pročitanim knjigama iz perspektive
            prosječnog čitatelja i dugogodišnjeg knjiškog moljca, zaljubljenika
            u nove i daleke svjetove, međuljudske odnose, i emocije koje knjige
            u meni bude. <br />
            Hvala ti što me pratiš. 🧡
          </p>
        </div>
      </div>
    </Container>
  );
};

export default OMeni;
