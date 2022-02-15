type Image = {
  sm: string;
  xl?: string;
  alt?: string;
};

type Author = {
  email: string;
  lastName?: string;
  firstName?: string;
};

type Page = {
  title?: string;
  headline?: string;
  metaTitle?: string;
  metaDescription?: string;

  cover?: Image;

  datePublished?: string;
  dateModified?: string;

  authors?: Array<Author>;

  slug: string;
  to: string;
  locale: string;

  featured?: boolean;

  noindex?: boolean;
  nofollow?: boolean;

  html: string;
  excerpt: string;
  readingTime: number;
};
