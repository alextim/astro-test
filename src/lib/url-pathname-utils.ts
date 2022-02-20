import i18n from '@/config/i18n';
import { isValidLocale } from './i18n-utils';

export const getLocaleFromUrlPathname = (pathname: string): string => {
  if (!pathname) {
    throw new Error('pathname reqired!');
  }
  if (pathname === '/') {
    return i18n.defaultLocale;
  }
  const [, locale = ''] = pathname.split('/');

  if (locale.length === 2) {
    if (!isValidLocale(locale)) {
      throw new Error(`Not valid locale ${locale} in ${pathname}`);
    }
    return locale;
  }

  return i18n.defaultLocale;
};
