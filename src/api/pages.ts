import { isDefaultLocale } from '../lib/i18n-utils';

import { AstroFetchedContentPage, getPage } from '../cms/page';
import fetchContent from './utils/fetchContent';

async function fetchExternalPageBySlug(slug: string, subpath: string, locale: string) {
  if (!slug) {
    throw new Error('slug is required parameter');
  }
  if (!subpath) {
    throw new Error('subpath is required parameter');
  }
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  const result = await fetchContent(`./content/${subpath}/${localePath}${slug}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPage(result[0] as AstroFetchedContentPage, locale);
}

async function fetchPageBySlug(slug: string, locale: string) {
  if (!slug) {
    throw new Error('slug is required parameter');
  }
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  const result = await fetchContent(`./src/pages/${localePath}${slug}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPage(result[0] as AstroFetchedContentPage, locale);
}

export async function fetchHome(locale: string) {
  return fetchPageBySlug('index', locale);
}

export async function fetchBlogIndex(locale: string) {
  return fetchExternalPageBySlug('blog', 'blog/pages/blog', locale);
}
