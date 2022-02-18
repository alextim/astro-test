import { Console } from "console";

export interface BreadcrumbsSchemaParams {
  breadcrumbs: Array<Link>;
  siteUrl: string;
}

const getBreadcrumbsSchema = ({ breadcrumbs, siteUrl }: BreadcrumbsSchemaParams) => {
  if (breadcrumbs.length === 0) {
    return null;
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map(({ to, title: name }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${siteUrl}${to}`,
    })),
  };
};

export default getBreadcrumbsSchema;
