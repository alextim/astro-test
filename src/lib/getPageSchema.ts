const getAuthor = (a: Array<Author> | undefined) => {
  if (!a || !a.length) {
    return null;
  }
  return a.map(({ lastName, firstName }: Author) => ({
    '@type': 'Person',
    name: `${lastName} ${firstName}`.trim(),
    // TODO: add Url of author profile
    // url: 'http://example.com/profile/janedoe123'
  }));
};

export interface Params {
  organizationName: string;
  siteUrl: string;
  siteLogo: string;
  publisher?: string;
  htmlLang: string;

  pageUrl: string;
  pageType: string;

  title: string;
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  authors?: Array<Author>;
  imgUrl?: string;
}

const getPageSchema = ({
  organizationName,
  siteUrl,
  siteLogo,
  publisher,
  htmlLang,

  pageUrl,
  pageType,

  title,
  headline,
  datePublished,
  dateModified,
  authors,
  imgUrl,
}: Params) => {
  const type = !pageType || !['Article', 'BlogPosting', 'Blog'].some((t) => pageType === t) ? 'WebPage' : pageType;
  const isArticle = pageType === 'Article' || pageType === 'BlogPosting';

  const o: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    inLanguage: htmlLang,
    publisher: publisher || {
      '@type': 'Organization',
      name: organizationName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: siteLogo,
      },
    },
  };

  if (isArticle) {
    o.author = getAuthor(authors) || o.publisher;
    o.mainEntityOfPage = {
      '@type': 'WebPage',
      '@id': pageUrl,
    };
    o.headline = headline;
    if (datePublished) {
      o.datePublished = datePublished;
    }
    if (dateModified) {
      o.dateModified = dateModified;
    }
  } else {
    o.url = pageUrl;
    o.description = headline;
  }

  if (imgUrl) {
    o.image = imgUrl;
  }

  return o;
};

export default getPageSchema;
