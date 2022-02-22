import getLocaleFromUrlPathname from '@/helpers/getLocaleFromUrlPathname';
import { fetchPageBySlug, fetchHome } from '@/api/pages';

const getLinks = async (pathname: string, tailTitle: string, items?: string[]) => {
  const locale = getLocaleFromUrlPathname(pathname);

  const home = await fetchHome(locale);
  if (!home) {
    throw new Error('Error fetchHome');
  }

  const a = items
    ? await Promise.all(
        items.map(async (name: string) => {
          const p = await fetchPageBySlug(name, locale);
          if (!p) {
            throw new Error(`Error fetch ${name}`);
          }
          return { to: p.to, title: p.title };
        }),
      )
    : [];

  const links = [{ to: home.to, title: home.title }, ...a, { to: pathname, title: tailTitle }];

  return links;
};

export default getLinks;
