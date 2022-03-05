import { localizePath } from '@/lib/i18n-utils';
import i18n from '@/config/i18n';

const slugify = (s: string) => s;

const getTags = (tags: string[] | undefined, locale: string = i18n.defaultLocale): Link[] | undefined => {
  if (!tags) {
    return undefined;
  }

  const result = [...new Set(tags)].map((tag) => ({
    to: localizePath(`/blog/tags/${slugify(tag)}/`, locale),
    title: tag,
  }));

  return result;
};

export default getTags;
