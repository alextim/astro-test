import i18n from '../config/i18n';

export const isValidLocale = (s) => i18n.locales[s];

export const isDefaultLocale = (s) => i18n.defaultLocale === s;

export const localize = (s, locale) => {
  const a = Array.isArray(s) ? s : [s];
  if (isDefaultLocale(locale)) {
    return ['', ...a, ''].join('/');
  }
  return ['', locale, ...a, ''].join('/');
};

const addStartSlash = (s) => (s.startsWith('/') ? s : `/${s}`);
const addTrailingSlash = (s) => (s.endsWith('/') ? s : `${s}/`);
const addSlashes = (s) => addStartSlash(addTrailingSlash(s));

export const localizePath = (path, lang) => {
  if (isDefaultLocale(lang)) {
    return addSlashes(path);
  }
  if (path === '/') {
    return `/${lang}/`;
  }
  return `/${lang}${addSlashes(path)}`;
};

export const pureSlug = (slug) => {
  if (slug === '/') {
    return '/';
  }
  const a = slug.split('/');
  if (!slug.endsWith('/')) {
    a.push('');
  }
  const [, locale] = a;
  const isLocalized = i18n.locales[locale];
  if (isLocalized) {
    const n = a.length;
    if (n < 4) {
      return '/';
    }
    return a
      .slice(0, a.length - 1)
      .slice(2)
      .join('/');
  }
  a.shift();
  a.pop();
  return a.join('/');
};

export const localeFromPath = (path) => {
  if (!path || path === '/') {
    return i18n.defaultLocale;
  }
  const [, lang] = path.split('/');
  if (!isDefaultLocale(lang)) {
    return i18n.defaultLocale;
  }
  return lang;
};
