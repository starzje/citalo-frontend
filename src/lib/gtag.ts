export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * Removes the cookies gtag.js has already written, so that withdrawing
 * consent takes effect immediately rather than at the next visit.
 */
export const clearAnalyticsCookies = () => {
  const gaCookies = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));

  // The cookies are set on the registrable domain, so expire them there too.
  const domains = [window.location.hostname, `.${window.location.hostname}`];

  gaCookies.forEach((name) => {
    domains.forEach((domain) => {
      document.cookie = `${name}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
};
