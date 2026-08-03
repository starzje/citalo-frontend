export const CONSENT_STORAGE_KEY = 'citalo-consent';

/** Fired when the user asks to review their choice again (footer link). */
export const CONSENT_REOPEN_EVENT = 'citalo-consent-reopen';

export type ConsentChoice = 'granted' | 'denied';

export const getStoredConsent = (): ConsentChoice | null => {
  if (typeof window === 'undefined') return null;

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    // Private browsing modes can throw on localStorage access.
    return null;
  }
};

export const storeConsent = (choice: ConsentChoice) => {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Choice simply will not persist; the banner reappears next visit.
  }
};

export const openConsentBanner = () => {
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
};
