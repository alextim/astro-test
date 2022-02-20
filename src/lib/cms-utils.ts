import readingTime from 'reading-time';
import prune from 'underscore.string/prune';
import sanitizeHTML from 'sanitize-html';

import { fetchAuthors } from './api';

const getReadingTime = (pureText: string): number => {
  const stats = readingTime(pureText);
  if (!stats.minutes) {
    return 0;
  }
  return stats.minutes > 1 ? Math.ceil(stats.minutes) : 1;
};

const getExcerpt = (pureText: string, pruneLength: number): string => prune(pureText, pruneLength, '…');

export function getReadingTimeAndExcerpt(html: string, pruneLength: number) {
  const pureText = sanitizeHTML(html, { allowedTags: [], allowedAttributes: {} });
  return {
    readingTime: getReadingTime(pureText),
    excerpt: getExcerpt(pureText, pruneLength),
  };
}

export const getAuthors = (authors: undefined | string[], locale: string): Array<Author> | undefined => {
  if (!locale) {
    throw new Error('locale reqired');
  }
  if (!authors) {
    return undefined;
  }

  const allAuthors = fetchAuthors(locale);

  return allAuthors.filter((el: { email: string }) => authors.some((email) => email === el.email));
};
