import config from '@/config/website';

import { getAuthors } from './author';
import getReadingTimeAndExcerpt from './utils/getReadingTimeAndExcerpt';
import getValidatedSlug from './utils/getValidatedSlug';
import getValidatedSlugFromContent from './utils/getValidatedSlugFromContent';

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
  const slug = getValidatedSlug(file?.pathname);
  return getPostBase({ ...rest }, slug, locale);
}

export function getPostFromContent(source: AstroFetchedContentPost, pathname: string, locale?: string): Post {
  const slug = getValidatedSlugFromContent(pathname);
  return getPostBase(source, slug, locale);
}
