import readingTime from 'reading-time';
import prune from 'underscore.string/prune';
import sanitizeHTML from 'sanitize-html';

const getReadingTime = (pureText: string): number => {
  const stats = readingTime(pureText);
  if (!stats.minutes) {
    return 0;
  }
  return stats.minutes > 1 ? Math.ceil(stats.minutes) : 1;
};

const getExcerpt = (pureText: string, pruneLength: number): string => prune(pureText, pruneLength, '…');

function getReadingTimeAndExcerpt(html: string, pruneLength: number) {
  const pureText = sanitizeHTML(html, { allowedTags: [], allowedAttributes: {} });
  return {
    readingTime: getReadingTime(pureText),
    excerpt: getExcerpt(pureText, pruneLength),
  };
}

export default getReadingTimeAndExcerpt;
