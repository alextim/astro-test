const getAuthor = (a) => {
  if (!a || !a.length) {
    return false;
  }
  return a.map((name) => ({
    '@type': 'Person',
    name,
    // TODO: add Url of author profile
    // url: 'http://example.com/profile/janedoe123'
  }));
};

const getPageSchema = ({
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
  pageType,
  publisher,
  author,
}) => {
  const type = !pageType || !['Article', 'BlogPosting', 'Blog'].some((t) => pageType === t) ? 'WebPage' : pageType;
  const isArticle = pageType === 'Article' || pageType === 'BlogPosting';

  const o = {
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
    o.author = getAuthor(author) || o.publisher;
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
