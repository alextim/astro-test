import getValidatedSlug from './utils/getValidatedSlug';
import getValidatedSlugFromContent from './utils/getValidatedSlugFromContent';

import type { AstroFetchedContent } from './base';
import { getBaseObject } from './base';

export interface AstroFetchedContentPage extends AstroFetchedContent {}

export function getPage({ file, ...rest }: AstroFetchedContentPage, locale?: string): Page {
  const slug = getValidatedSlug(file?.pathname);
  return getBaseObject({ ...rest }, slug, locale);
}

export function getPageFromContent(source: AstroFetchedContentPage, pathname: string, locale?: string): Page {
  const slug = getValidatedSlugFromContent(pathname);
  return getBaseObject(source, slug, locale);
}
