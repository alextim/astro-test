import readingTime from 'reading-time';
import prune from 'underscore.string/prune';
import sanitizeHTML from 'sanitize-html';

import { localize } from './i18n-utils';
import config from '../config/website';
import { getLocaleFromPathname, getSlugFromPathname } from './getPostInfo';
import { fetchAuthors } from './api';

const getReadingTime = (pureText) => {
  const stats = readingTime(pureText);
  if (!stats.minutes) {
    return 0;
  }
  return stats.minutes > 1 ? Math.ceil(stats.minutes) : 1;
};

const getExcerpt = (pureText) => {
  return prune(pureText, config.pruneLength, `…`)
};

const getAuthors = (authors, locale) => {
  if (!authors || !Array.isArray(authors)) {
    return null;
  }
  const allAuthors = fetchAuthors(locale);
  return allAuthors.filter((el) => authors.some((email) => email === el.email));
};

export function getPage({ astro: { html }, file: { pathname }, content, Content, url, author, slug: sourceSlug, ...rest }) {
  const locale = getLocaleFromPathname(pathname);
  const pureText = sanitizeHTML(html, { allowedTags: [], allowedAttributes: {} });

  const slug = sourceSlug || getSlugFromPathname(pathname);

  return {
    ...rest,
    html,
    readingTime: getReadingTime(pureText),
    excerpt: getExcerpt(pureText),
    authors: getAuthors(author, locale),
    slug,
    to: localize([config.blogPath, slug], locale),
    locale,
  };
}

export function defaultSort(a, b) {
  return new Date(b.datePublished).valueOf() - new Date(a.datePublished).valueOf();
}
