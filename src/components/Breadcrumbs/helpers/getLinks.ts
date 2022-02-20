import { getLocaleFromUrlPathname } from '@/lib/url-pathname-utils';
import { fetchHome, fetchBlogIndex } from '@/lib/api';

const pageNames: Record<string, any> = {
  'blog-index': fetchBlogIndex,
};

const getLinks = async (pathname: string, tailTitle: string, items: string[]) => {
  const locale = getLocaleFromUrlPathname(pathname);

  const home = await fetchHome(locale);
  if (!home) {
    throw new Error ('Error fetchHome');
  }

  const a = await Promise.all(Object.keys(items).map(async (name: string) => {
    const f = pageNames[name];
    if (!f) {
      throw new Error (`${name} is not in allowed list`);
    }
    const p = await f(locale);
    if (!p) {
      throw new Error (`Error fetch ${name}`);
    }
    return { to: p.to, title: p.title };
  }));

  const links = [
    { to: home.to, title: home.title },
    ...(a || []),
    { to: pathname, title: tailTitle }
  ];

  return links;
};

export default getLinks;
