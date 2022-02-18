const getWebSiteSchema = ({ siteUrl, i18n, locale }: BaseSEO) => {
  const { htmlLang, siteTitle, siteDescription } = i18n.locales[locale]!;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#WebSite`,
    url: siteUrl,
    name: siteTitle,
    description: siteDescription,
    inLanguage: htmlLang,
  };
};

export default getWebSiteSchema;
