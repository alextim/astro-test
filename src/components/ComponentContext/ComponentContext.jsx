import React, { useContext } from 'react';
import translate from '@/lib/translate';

export const ComponentContext = React.createContext();
ComponentContext.displayName = 'ComponentContext';

export const useComponentContext = () => useContext(ComponentContext);

export const useLocale = () => {
  const { locale } = useComponentContext();
  return locale;
};

export const usePathname = () => {
  const { pathname } = useComponentContext();
  return pathname;
};

export const useMainNav = () => {
  const { mainNav } = useComponentContext();
  return mainNav;
};

export const useContacts = () => {
  const { contacts } = useComponentContext();
  return contacts;
};

export const useTranslation = () => {
  const { translations } = useComponentContext();

  return { t: (key, params = {}) => translate(key, translations, params) };
};
