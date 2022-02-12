/* eslint-disable react-hooks/rules-of-hooks */
import getPageSchema from './getPageSchema';

import i18n from '../config/i18n';

const getCardSchema = ({
  locale,
  organizationName,
  siteUrl,
  siteLogo,
  to,
  title,
  headline,
  cover,
  datePublished,
  dateModified,
  author,
  pageType = 'Article',
}) => {
   const { htmlLang } = i18n.locales[locale];
  if (pageType !== 'Article' && pageType !== 'BlogPosting') {
    throw new Error(`getCardSchema: Unsupported pageType ${pageType}!`);
  }

  const pageUrl = `${siteUrl}${to}`;

  let imgUrl;
  if (cover && cover.sm && cover.sm.publicURL) {
    imgUrl = `${siteUrl}${cover.sm.publicURL}`;
  }

  return getPageSchema({
    organizationName,
    siteUrl,
    siteLogo,
    pageUrl,
    title,
    headline,
    htmlLang,
    imgUrl,
    datePublished,
    dateModified,
    author,
    pageType,
  });
};

export default getCardSchema;
