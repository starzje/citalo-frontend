import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import CookieConsent from 'react-cookie-consent';
import { PageConnectedLayout } from 'src/components';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  fallback: ['sans-serif'],
  preload: false,
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={`${poppins.className} bg-stone-200 relative`}>
      <div className={`max-w-[1100px] min-h-screen   m-auto `}>
        <PageConnectedLayout>
          <CookieConsent
            location="bottom"
            buttonText="I understand"
            cookieName="CookiesAccepted"
            acceptOnScroll={true}
            acceptOnScrollPercentage={50}
            style={{
              background: '#57453d',
            }}
            buttonStyle={{
              backgroundColor: '#e7e5e4',
              color: '#4e503b',
              fontSize: '13px',
              borderRadius: '5px',
              margin: '0 10px',
            }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
          <Component {...pageProps} />
        </PageConnectedLayout>
      </div>
    </div>
  );
};

export default App;
