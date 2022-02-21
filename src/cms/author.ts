import i18n from '@/config/i18n';

import { fetchAuthors } from '@/api/yamls';

export const getAuthors = (authors: undefined | string[], locale: string = i18n.defaultLocale): Array<Author> | undefined => {
  if (!locale) {
    throw new Error('locale required');
  }
  if (!authors) {
    return undefined;
  }

  const allAuthors = fetchAuthors(locale);

  return allAuthors.filter((el: { email: string }) => authors.some((email) => email === el.email));
};
