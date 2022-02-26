import config from '@/config/website';

import { getAuthors } from './utils/getAuthors';
import getReadingTimeAndExcerpt from './utils/getReadingTimeAndExcerpt';
import getValidatedSlug from './utils/getValidatedSlug';
import getValidatedSlugFromContent from './utils/getValidatedSlugFromContent';
import getTags from './utils/getTags';

import type { AstroFetchedContent } from './base';
import { getBaseObject } from './base';

export interface AstroFetchedContentPost extends AstroFetchedContent {
  authors?: string[];
  tags?: string[];
}

function getPostBase(source: AstroFetchedContentPost, slug: string, locale?: string): Post {
  const o = getBaseObject(source, [config.blogPath, slug], locale);
  return {
    ...o,
    ...getReadingTimeAndExcerpt(o.html, config.pruneLength),

    authors: getAuthors(source?.authors, locale),
    tags: getTags(source?.tags, locale),
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
