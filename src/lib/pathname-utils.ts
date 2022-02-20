import { isValidLocale } from './i18n-utils';

export const getDirFromPathname = (pathname: string): string => {
  const a = pathname.split('/');
  a.pop();
  return a.join('/');
};

export const getSlugFromPathname = (pathname: string): string => {
  const [name] = pathname.split('/').slice(-1);
  if (!name) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  const [fileName] = name.split('.');
  if (!fileName) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  return fileName;
};

export const getLocaleFromPathname = (pathname: string, warnings = false): string => {
  const [, name] = pathname.split('/').slice(-2);
  if (!name) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  const [, locale] = name.split('.');

  if (!isValidLocale(locale)) {
    if (warnings) {
      console.warn(`
        Not valid locale in filename
        locale=${locale}
        pathname=${pathname}
      `);
    }
    return 'invalid locale';
  }
  if (!locale) {
    throw new Error(`Wrong pathname ${pathname}. Empty locale.`);
  }
  return locale;
};
