import readingTime from 'reading-time';
import prune from 'underscore.string/prune';
import sanitizeHTML from 'sanitize-html';

import { localize } from '@/lib/i18n-utils';
import config from '@/config/website';
import { getLocaleFromPathname, getSlugFromPathname } from './pathname-utils';
import { fetchAuthors } from './api';

const getReadingTime = (pureText: string): number => {
  const stats = readingTime(pureText);
  if (!stats.minutes) {
    return 0;
  }
  return stats.minutes > 1 ? Math.ceil(stats.minutes) : 1;
};

const getExcerpt = (pureText: string): string => prune(pureText, config.pruneLength, '…');

const getAuthors = (authors: undefined | string[], locale: string): Array<Author> | undefined => {
  if (!authors) {
    return undefined;
  }
  const allAuthors = fetchAuthors(locale);
  return allAuthors.filter((el: { email: string }) => authors.some((email) => email === el.email));
};

export function getPost({
  astro: { html },
  file: { pathname },
  // Strip Astro
  url,
  content,
  Content,

  title,
  headline,
  metaTitle,
  metaDescription,

  authors,

  slug: sourceSlug,
  ...rest
}: AstroPost): Post {
  const locale = getLocaleFromPathname(pathname);
  const pureText = sanitizeHTML(html, { allowedTags: [], allowedAttributes: {} });

  const slug: string = sourceSlug || getSlugFromPathname(pathname);

  return {
    ...rest,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,

    html,
    readingTime: getReadingTime(pureText),
    excerpt: getExcerpt(pureText),

    authors: getAuthors(authors, locale),

    slug,
    to: localize([config.blogPath, slug], locale),
    locale,
  };
}

export function getPage({
  astro: { html },
  file: { pathname },
  // Strip Astro
  url,
  content,
  Content,

  title,
  headline,
  metaTitle,
  metaDescription,

  slug: sourceSlug,
  ...rest
}: AstroPage): Page {
  const locale = getLocaleFromPathname(pathname);

  const slug: string = sourceSlug || getSlugFromPathname(pathname);

  return {
    ...rest,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,

    html,

    slug,
    to: localize(slug, locale),
    locale,
  };
}

export function defaultSort(a: any, b: any): number {
  return new Date(b.datePublished).valueOf() - new Date(a.datePublished).valueOf();
}
