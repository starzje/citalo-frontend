import { NaslovnaProps } from '@/types';
import React, { FC } from 'react';
import { IstaknuteRecenzijeElement } from 'src/components';

const IstaknuteRecenzije: FC<NaslovnaProps> = ({
  recenzije,
  nedavnipostovi,
}) => {
  return (
    <section className="relative bg-light-brown  shadow-md min-h-screen">
      <h2 className="pl-6 text-3xl font-bold text-center text-dark-brown">
        Nedavne objave
      </h2>
      <div className="py-8 ">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {nedavnipostovi?.map((nedavnipost) => {
            return (
              <IstaknuteRecenzijeElement
                key={nedavnipost.id}
                path={null}
                recenzija={nedavnipost}
              />
            );
          })}
        </div>
      </div>
      <h2 className="pl-6 text-3xl font-bold text-center text-dark-brown">
        Istaknute objave
      </h2>
      <div className="py-8 ">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {recenzije?.map((recenzija) => {
            return (
              <IstaknuteRecenzijeElement
                key={recenzija.id}
                path={'recenzije'}
                recenzija={recenzija}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IstaknuteRecenzije;
