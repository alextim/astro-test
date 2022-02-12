import i18n from '../config/i18n';
import { isDefaultLocale } from './i18n-utils';
import { getLocaleFromPathname, getSlugFromPathname } from './getPostInfo';

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

  const posts = data.map((p) => {
      const locale = getLocaleFromPathname(p.file.pathname);
      return {...p, locale };
  }).filter(({ locale }) => predicat(locale));

  const paths = posts.map((p) => {
    const slug = p.slug ? p.slug : getSlugFromPathname(p.file.pathname);
    
    return {
      params: getParams(slug, p.locale),
      props: {
        ...p,
        locale: p.locale,
        slug,
      },
    };
  });

  paths.forEach((p) => console.log(p.props.slug));

  return paths;
}

export default getPostsPaths;