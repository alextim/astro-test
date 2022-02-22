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

async function _fetchPageBySlug(slug: string, locale: string) {
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
  return await _fetchPageBySlug('index', locale);
}

export async function fetchBlogIndex(locale: string) {
  return await fetchExternalPageBySlug('blog', 'blog/pages/blog', locale);
}

export async function _fetchYears(locale: string) {
  return await _fetchPageBySlug('blog/years/index', locale);
}

export async function _fetchYearsYear(locale: string) {
  return await fetchExternalPageBySlug('years', 'blog/pages/blog', locale);
}

export async function _fetchTagsTag(locale: string) {
  return await fetchExternalPageBySlug('tags', 'blog/pages/blog', locale);
}

const pageNames: Record<string, any> = {
  blog: fetchBlogIndex,
  years: _fetchYears,
  'years[year]': _fetchYearsYear,
  'tags[tag]': _fetchTagsTag,
};

export async function fetchPageBySlug(slug: string, locale: string) {
  if (!slug) {
    throw new Error('slug is required parameter');
  }
  const f = pageNames[slug];
  if (!f) {
    throw new Error(`${slug} is not in list`);
  }
  const result = await f(locale);
  return result;
}
