import config from '@/config/website';

const getBreadcrumbsSchema = (items: Array<Link>) => {
  if (items.length === 0) {
    return null;
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ to, title: name }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${config.siteUrl}${to}`,
    })),
  };
};

export default getBreadcrumbsSchema;
