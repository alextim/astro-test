import i18n from '@/config/i18n';

import { isDefaultLocale } from '../lib/i18n-utils';
import { AstroFetchedContentPost, getPost } from '../cms/post';
import { defaultSort } from '../cms/shared';
import fetchContent from './utils/fetchContent';

//  TODO:
export async function fetchPostsBase(locale = i18n.defaultLocale) {
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  let result = await fetchContent(`./src/pages/${localePath}blog/*.md`);
  if (!result) {
    return null;
  }
  return result;
}

export async function fetchPosts(
  locale = i18n.defaultLocale,
  options?: {
    filter?(p: any): boolean;
    sort?(a: any, b: any): number;
    limit?: number;
  },
) {
  let result = await fetchPostsBase(locale);
  if (!result) {
    return null;
  }
  if (options && options.filter && typeof options.filter === 'function') {
    result = result.filter((p) => !(p as any).draft && options.filter!(p));
  } else {
    result = result.filter((p) => !(p as any).draft);
  }
  if (options?.sort) {
    result = result.sort(options.sort);
  } else if (!options || !options.sort) {
    result = result.sort(defaultSort);
  }
  if (options?.limit) {
    result = result.slice(0, options.limit);
  }
  return result.map((p) => getPost(p, locale));
}

export async function fetchPostBySlug(slug: string, locale: string) {
  if (!slug) {
    throw new Error('slug is reqired parameter');
  }
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  const result = await fetchContent(`./src/pages/${localePath}blog/${slug}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPost(result[0] as AstroFetchedContentPost, locale);
}
