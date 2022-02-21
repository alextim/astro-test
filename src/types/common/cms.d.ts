type Image = {
  src: string;
  xl?: string;
  alt?: string;
};

type Author = {
  email: string;
  lastName?: string;
  firstName?: string;
};

type FooterNav = Array<Link>;

type MainNavItem = Link & {
  submenu?: Array<Link>;
};

type MainNav = Array<MainNavItem>;

type SocialNetwork = 'facebook' | 'instagram';

interface SocialLinks extends Record<string, Link> {}

type TranslationItem = {
  key: string;
  value: string;
};

type Translations = Array<TranslationItem>;

interface FrontmatterBase {
  title: string;
  headline?: string;
  cover?: Image;

  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;

  noindex?: boolean;
  nofollow?: boolean;
}

interface BaseObject extends FrontmatterBase {
  html: string;

  to: string;
  locale: string;
}

interface FrontmatterPost extends FrontmatterBase {
  datePublished?: ISODate;
  dateModified?: ISODate;

  authors?: Array<Author>;

  tags?: string[];
  categories?: string[];

  featured?: boolean;
}

interface Post extends FrontmatterPost, BaseObject {
  excerpt: string;
  readingTime: number;
}

interface FrontmatterPage extends FrontmatterBase {}
interface Page extends FrontmatterPage, BaseObject {}
