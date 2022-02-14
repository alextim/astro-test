/**
 * Receives post's array and flag, extracts locale and slug from pathname (dir + file name)
 *
 * Returns Array with params and props
 * [
 *  {
 *    params: { locale } | { locale, slug },
 *    props: {
 *      ...post,
 *      locale,
 *      slug,
 *    }
 *  },
 *  ...
 * ]
 *
 * @param {Array} data - Raw posts Array.
 * @param {boolean} isDefault [isDefault=false] - If isDefault is false - params: { locale, slug }, if true - params: { locale }.
 * @returns {Array}
 */

import i18n from '../config/i18n';
import { isDefaultLocale } from './i18n-utils';
import { getLocaleFromPathname } from './getPostInfo';
import { getPage } from './cms';

function getPostsPaths(data, isDefault = false) {
  let predicat;
  let getParams;

  if (isDefault) {
    predicat = (locale) => isDefaultLocale(locale);
    getParams = (slug) => ({ slug });
  } else {
    predicat = (locale) => !isDefaultLocale(locale) && i18n.locales[locale];
    getParams = (slug, locale) => ({ locale, slug });
  }

  const posts = data.filter(({ file: { pathname } }) => predicat(getLocaleFromPathname(pathname))).map(getPage);

  const paths = posts.map((p) => ({
    params: getParams(p.slug, p.locale),
    props: {
      ...p,
    },
  }));

  return paths;
}

export default getPostsPaths;
