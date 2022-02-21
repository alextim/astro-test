import config from '@/config/website';

import { getAuthors } from './author';
import getReadingTimeAndExcerpt from './utils/getReadingTimeAndExcerpt';
import getSlugFromFilePathname from './utils/getSlugFromFilePathname';

import type { AstroFetchedContent } from './base';
import { getBaseObject } from './base';

export interface AstroFetchedContentPost extends AstroFetchedContent {
  authors?: string[];
}

function getPostBase(source: AstroFetchedContentPost, slug: string, locale?: string): Post {
  const o = getBaseObject(source, [config.blogPath, slug], locale);
  return {
    ...o,
    ...getReadingTimeAndExcerpt(o.html, config.pruneLength),

    authors: getAuthors(source?.authors, locale),
  } as Post;
}

export function getPost({ file, ...rest }: AstroFetchedContentPost, locale?: string): Post {
  const slug = getSlugFromFilePathname(file?.pathname || '');
  if (!slug) {
    throw new Error(`Wrong pathname ${file?.pathname} in content`);
  }
  return getPostBase({ ...rest }, slug, locale);
}

export function getPostFromContent(source: AstroFetchedContentPost, pathname: string, locale?: string): Post {
  const [slug] = pathname.split('/').slice(-2, -1);
  if (!slug) {
    throw new Error(`Wrong pathname ${pathname} in content`);
  }
  return getPostBase(source, slug, locale);
}
