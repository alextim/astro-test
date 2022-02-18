const getAuthor = (a: Array<Author> | undefined) => {
  if (!a || !a.length) {
    return null;
  }
  return a.map(({ lastName = '', firstName = '' }: Author) => `${lastName} ${firstName}`.trim())
    .filter(Boolean)
    .map((name) => ({
      '@type': 'Person',
      name,
      // TODO: add Url of author profile
      // url: 'http://example.com/profile/janedoe123'
  }));
};

const getPageSchema = ({
  htmlLang,
  organizationName,

  siteUrl,
  siteLogo,

  publisher,

  pageUrl,

  pageType,

  title,
  headline,
  datePublished,
  dateModified,
  authors,

  imgUrl,
}: PageSchemaParams) => {
  if (!pageUrl) {
    throw new Error('"pageUrl" is required');
  }

  const o: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': !pageType || !['Article', 'BlogPosting', 'Blog'].some((t) => pageType === t) ? 'WebPage' : pageType,
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

  if (pageType === 'Article' || pageType === 'BlogPosting') {
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
