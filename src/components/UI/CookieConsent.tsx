import Link from 'next/link';
import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  CONSENT_REOPEN_EVENT,
  ConsentChoice,
  getStoredConsent,
  storeConsent,
} from '@/lib/consent';

interface CookieConsentProps {
  onChoice: (choice: ConsentChoice) => void;
}

const CookieConsent: FC<CookieConsentProps> = ({ onChoice }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) setIsVisible(true);

    const reopen = () => setIsVisible(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  const handleChoice = useCallback(
    (choice: ConsentChoice) => {
      storeConsent(choice);
      onChoice(choice);
      setIsVisible(false);
    },
    [onChoice]
  );

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Pristanak na kolačiće"
      className="fixed bottom-0 left-0 right-0 z-50 bg-dark-brown text-light-brown shadow-lg"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-light leading-relaxed">
          Koristimo kolačiće za anonimnu statistiku posjeta kako bismo znali
          koji sadržaj čitate. Možete ih prihvatiti ili odbiti — stranica radi
          jednako u oba slučaja. Više u{' '}
          <Link
            href="/uvjeti-koristenja"
            className="underline underline-offset-2 hover:text-white transition duration-300"
          >
            uvjetima korištenja
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice('denied')}
            className="flex-1 rounded-md border border-light-brown px-5 py-2 text-sm font-semibold hover:bg-[#776258] transition duration-300 sm:flex-none"
          >
            Odbij
          </button>
          <button
            type="button"
            onClick={() => handleChoice('granted')}
            className="flex-1 rounded-md bg-light-brown px-5 py-2 text-sm font-semibold text-dark-brown hover:bg-white transition duration-300 sm:flex-none"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
