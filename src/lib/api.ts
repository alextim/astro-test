/*
import dotenv from 'dotenv';
import _fetchAPI from './fetchAPI';


dotenv.config();
const API_URL = process.env.WP_URL;

const fetchAPI = (query, { variables } = {}) => _fetchAPI(API_URL, query, variables);
*/
import i18n from '@/config/i18n';
import { isDefaultLocale } from './i18n-utils';

import getYaml from './getYaml';
import { fetchContent } from './fetchContent';

import { getPost, getPage } from './cms';

export function fetchContacts(): Contacts {
  return getYaml('content/data/contacts.yaml');
}

export function fetchMainNav(locale: string): MainNav {
  return getYaml(`content/data/locales/main-nav/main-nav.${locale}.yaml`);
}

export function fetchFooterNav(locale: string): FooterNav {
  return getYaml(`content/data/locales/footer-nav/footer-nav.${locale}.yaml`);
}

export function fetchSocialLinks(locale: string): SocialLinks {
  return getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
}

export function fetchTranslations(locale: string): Translations {
  return getYaml(`content/data/locales/translations/translations.${locale}.yaml`);
}

export function fetchAddress(locale: string): Address {
  return getYaml(`content/data/locales/address/address.${locale}.yaml`);
}

export function fetchAuthors(locale: string): Array<Author> {
  return getYaml(`content/blog/authors/authors.${locale}.yaml`);
}

export async function fetchPosts(locale: string, options?: {
  filter?: (p: any) => boolean;
  sort?: (a: any, b: any) => number;
  limit?: number;
}) {
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  let result = await fetchContent(`./src/pages/${localePath}blog/*.md`);
  if (!result) {
    return null;
  }
  if (options?.filter) {
    result = result.filter(options.filter);
  }
  if (options?.sort) {
    result = result.sort(options.sort);
  } else {
    if (!options || !options.sort) {
      result = result.sort((a, b) => new Date(((b as any) as Post).datePublished || '').valueOf() - new Date(((a as any) as Post).datePublished || '').valueOf());
    }
  }
  if (options?.limit) {
    result = result.slice(0, options.limit);
  }
  return result.map((p) => getPost(p, locale || i18n.defaultLocale));
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
  return getPost(result[0] as Partial<AstroPost>, locale);
}

export async function fetchExternalPageBySlug(slug: string, subpath: string, locale: string) {
  if (!slug) {
    throw new Error('slug is reqired parameter');
  }
  if (!subpath) {
    throw new Error('subpath is reqired parameter');
  }
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  const result = await fetchContent(`./content/${subpath}/${localePath}${slug}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPage(result[0] as Partial<AstroPage>, locale);
}


export async function fetchPageBySlug(slug: string, locale: string) {
  if (!slug) {
    throw new Error('slug is reqired parameter');
  }
  const localePath = isDefaultLocale(locale) ? '' : `${locale}/`;
  const result = await fetchContent(`./src/pages/${localePath}${slug}.md`);
  if (!result || result.length === 0) {
    return null;
  }
  return getPage(result[0] as Partial<AstroPage>, locale);
}


export async function fetchHome(locale: string) {
  return fetchPageBySlug('index', locale);
}

export async function fetchBlogIndex(locale: string) {
  return fetchExternalPageBySlug('blog', 'blog/pages/blog', locale);
}
