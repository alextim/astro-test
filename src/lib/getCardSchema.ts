/* eslint-disable react-hooks/rules-of-hooks */
import getPageSchema from './getPageSchema';

import i18n from '@/config/i18n';
import config from '@/config/website';

export interface Params {
  locale: string;

  organizationName: string;
  siteUrl: string;
  publisher?: string;

  to: string;
  pageType: string;

  title: string;
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  authors?: Array<Author>;
  imgTo?: string;
}

const getCardSchema = ({
  locale,

  organizationName,
  siteUrl,
  publisher = '',

  to,
  pageType = 'BlogPosting',

  title,
  headline,
  datePublished,
  dateModified,
  authors,
  imgTo,
}: Params) => {
  const localeObj = i18n.locales[locale];
  if (!localeObj) {
    throw new Error(`Invalid locale ${locale}`);
  }
  const { htmlLang } = localeObj;

  if (pageType !== 'Article' && pageType !== 'BlogPosting') {
    throw new Error(`getCardSchema: Unsupported pageType ${pageType}!`);
  }

  return getPageSchema({
    organizationName,
    siteUrl,
    siteLogo: `${siteUrl}${config.siteLogo}`,
    publisher,
    htmlLang,

    pageUrl: `${siteUrl}${to}`,
    pageType,

    title,
    headline,
    datePublished,
    dateModified,
    authors,
    imgUrl: imgTo ? `${siteUrl}${imgTo}` : '',
  });
};

export default getCardSchema;
