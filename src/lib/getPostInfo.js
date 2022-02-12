import { isValidLocale, localize } from './i18n-utils';

export const getDirFromPathname = (pathname) => {
  const a = pathname.split('/');
  a.pop();
  return a.join('/');
};

export const getSlugFromPathname = (pathname) => {
  const [dir, name] = pathname.split('/').slice(-2);
  const [fileName] = name.split('.');

  if (fileName === 'index') {
    return dir;
  } else {
    return fileName;
  }
};

export const getLocaleFromPathname = (pathname, warnings = false) => {
  const [, name] = pathname.split('/').slice(-2);
  const [, locale] = name.split('.');

  if (!isValidLocale(locale)) {
    if (warnings) {
      console.warn(`
        Not valid locale in filename
        locale=${locale}
        pathname=${pathname}
      `);
    }
    return null;
  }
  return locale;
};


const getPostInfo = (post, warnings = false) => {
  const pathname = post.file.pathname;
  const locale = getLocaleFromPathname(pathname, warnings);
  if (!locale) {
    return null;
  }
  let slug = post.slug || getSlugFromPathname(pathname);

  slug = localize(['blog', slug], locale);
  return { slug, locale };
};

export default getPostInfo;
