import type { FetchContentResult } from 'astro';

import i18n from '@/config/i18n';
import { localize } from '@/lib/i18n-utils';

export interface AstroFetchedContent extends FetchContentResult<FrontmatterBase> {
  file?: {
    pathname: string;
  };
  // only to strip Astro
  content?: any;
  Content?: any;
}

export function getBaseObject(
  {
    astro: { html },
    // only to strip Astro
    content,
    Content,
    url,

    title,
    headline,
    metaTitle,
    metaDescription,

    ...rest
  }: AstroFetchedContent,
  slug?: string | string[],
  locale: string = i18n.defaultLocale,
): BaseObject {
  if (!slug || slug.length === 0) {
    throw new Error('Slug is required!');
  }
  return {
    ...rest,
    title,
    headline,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || headline,

    html,

    to: localize(slug, locale),
    locale,
  };
}
