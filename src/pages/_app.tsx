import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { CookieConsent, PageConnectedLayout } from 'src/components';
import { Poppins } from 'next/font/google';
import { ConsentChoice, getStoredConsent } from '@/lib/consent';
import { GA_MEASUREMENT_ID, clearAnalyticsCookies, pageview } from '@/lib/gtag';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  fallback: ['sans-serif'],
  preload: false,
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [hasConsent, setHasConsent] = useState(false);

  // Read on mount only: the server render has no access to localStorage, so
  // starting at false keeps the markup identical on both sides.
  useEffect(() => {
    setHasConsent(getStoredConsent() === 'granted');
  }, []);

  useEffect(() => {
    if (!hasConsent) return;

    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [hasConsent, router.events]);

  const handleConsentChoice = useCallback((choice: ConsentChoice) => {
    setHasConsent(choice === 'granted');
    if (choice === 'denied') clearAnalyticsCookies();
  }, []);

  return (
    <div className={`${poppins.className} bg-stone-200 relative`}>
      {GA_MEASUREMENT_ID && hasConsent && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      <div className={`max-w-[1100px] min-h-screen   m-auto `}>
        <PageConnectedLayout trenutnaKnjiga={pageProps.trenutnaKnjiga}>
          <Component {...pageProps} />
        </PageConnectedLayout>
      </div>
      <CookieConsent onChoice={handleConsentChoice} />
    </div>
  );
};

export default App;
