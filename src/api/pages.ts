import { isDefaultLocale } from '../lib/i18n-utils';

import { AstroFetchedContentPage, getPage } from '../cms/page';
import fetchContent from './utils/fetchContent';

async function fetchPageByPath(path: string, locale: string) {
  if (!path) {
    throw new Error('path is required parameter');
  }
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  const result = await fetchContent(`./src/pages/${localePath}${path}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPage(result[0] as AstroFetchedContentPage, locale);
}

export const fetchHome = (locale: string) => fetchPageByPath('index', locale);

const pageNames: Record<string, (locale: string) => any> = {
  blog: (locale: string) => fetchPageByPath('blog/list/blog', locale),
  'tags[tag]': (locale: string) => fetchPageByPath('blog/list/tags', locale),
  'years[year]': (locale: string) => fetchPageByPath('blog/list/years', locale),
  years: (locale: string) => fetchPageByPath('blog/years/index', locale),
};

export async function fetchPageBySlug(slug: string, locale: string) {
  if (!slug) {
    throw new Error('slug is required parameter');
  }
  const f = pageNames[slug];
  if (!f) {
    throw new Error(`slug ${slug} is not in list`);
  }
  const result = await f(locale);
  return result;
}
