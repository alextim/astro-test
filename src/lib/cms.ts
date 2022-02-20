import config from '@/config/website';
import i18n from '@/config/i18n';
import { localize } from '@/lib/i18n-utils';
import { getReadingTimeAndExcerpt, getAuthors } from './cms-utils';

import { getSlugFromFilePathname } from './file-pathname-utils';

export function getPost({
  file,
  // Strip Astro
  url,
  content,
  Content,

  ...rest
}: Partial<AstroPost>,
  locale?: string,
): Post {
  const slug = getSlugFromFilePathname(file?.pathname || '');
  if (!slug) {
    throw new Error(`Wrong pathname ${file?.pathname} in content`);
  }
  return _getPost({ ...rest }, slug, locale);
}

export function getPostFromContent(
  astroPost: AstroPost,
  pathname: string,
  locale?: string,
): Post {
  const [slug] = pathname.split('/').slice(-2, -1);
  if (!slug) {
    throw new Error(`Wrong pathname ${pathname} in content`);
  }
  return _getPost(astroPost, slug, locale);
}

export function _getPost({
    astro,

    title,
    headline,
    metaTitle,
    metaDescription,

    authors,
    ...rest
  }: Partial<AstroPost>,
  slug: string,
  locale: string = i18n.defaultLocale,
): Post {
  const html = astro?.html || '';

  return {
    ...rest,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,

    html,
    ...getReadingTimeAndExcerpt(html, config.pruneLength),

    authors: getAuthors(authors, locale),

    slug,
    to: localize([config.blogPath, slug], locale),
    locale,
  };
}

export function getPage({
    file,
    // Strip Astro
    url,
    content,
    Content,
    ...rest
  }: Partial<AstroPage>,
  locale?: string,
): Page {
  const slug = getSlugFromFilePathname(file?.pathname || '');
  if (!slug) {
    throw new Error(`Wrong pathname ${file?.pathname} in content`);
  }
  return _getPage({ ...rest }, slug, locale);
}

export function getPageFromContent(
  astroPage: AstroPage,
  pathname: string,
  locale?: string,
): Page {
  let slug;
  console.log(pathname, locale)
  if (pathname === '/') {
    slug = '/';
  } else {
    [slug] = pathname.split('/').slice(-2, -1);
  }
  if (!slug) {
    throw new Error(`Wrong pathname ${pathname} in content`);
  }
  return _getPage(astroPage, slug, locale);
}


function _getPage({
    astro,

    title,
    headline,
    metaTitle,
    metaDescription,

    ...rest
  }: Partial<AstroPage>,
  slug: string,
  locale: string = i18n.defaultLocale,
): Page {

  return {
    ...rest,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,

    html: astro?.html || '',

    slug,
    to: localize(slug, locale || i18n.defaultLocale),
    locale: locale || i18n.defaultLocale,
  };
}


export function defaultSort(a: any, b: any): number {
  return new Date(b.datePublished).valueOf() - new Date(a.datePublished).valueOf();
}
