import getSlugFromFilePathname from './utils/getSlugFromFilePathname';

import type { AstroFetchedContent } from './base';
import { getBaseObject } from './base';

export interface AstroFetchedContentPage extends AstroFetchedContent {}

export function getPage({ file, ...rest }: AstroFetchedContentPage, locale?: string): Page {
  if (!file?.pathname) {
    throw new Error('pathname is required');
  }
  const slug = getSlugFromFilePathname(file.pathname);
  const page = getBaseObject({ ...rest }, slug, locale);
  return page as any as Page;
}

export function getPageFromContent(source: AstroFetchedContentPage, pathname: string, locale?: string): Page {
  let slug;

  if (pathname === '/') {
    slug = '/';
  } else {
    [slug] = pathname.split('/').slice(-2, -1);
  }

  const page = getBaseObject(source, slug, locale);
  return page as any as Page;
}
