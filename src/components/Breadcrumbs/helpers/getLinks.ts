import getLocaleFromUrlPathname from '@/helpers/getLocaleFromUrlPathname';
import { fetchHome, fetchBlogIndex, fetchYears } from '@/api/pages';

const pageNames: Record<string, any> = {
  'blog-index': fetchBlogIndex,
  'years': fetchYears,
};

const getLinks = async (pathname: string, tailTitle: string, items: string[]) => {
  const locale = getLocaleFromUrlPathname(pathname);

  const home = await fetchHome(locale);
  if (!home) {
    throw new Error('Error fetchHome');
  }

  const a = await Promise.all(
    items.map(async (name: string) => {
      const f = pageNames[name];
      if (!f) {
        throw new Error(`${name} is not in list`);
      }
      const p = await f(locale);
      if (!p) {
        throw new Error(`Error fetch ${name}`);
      }
      return { to: p.to, title: p.title };
    }),
  );

  const links = [{ to: home.to, title: home.title }, ...(a || []), { to: pathname, title: tailTitle }];

  return links;
};

export default getLinks;
