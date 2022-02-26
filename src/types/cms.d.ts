type Image = {
  src: string;
  xl?: string;
  alt?: string;
  title?: string;
};

type Author = {
  email: string;
  lastName?: string;
  firstName?: string;
};

type FooterNav = Link[];

type MainNavItem = Link & {
  submenu?: Link[];
};

type MainNav = Array<MainNavItem>;

type SocialNetwork = 'facebook' | 'instagram';

interface SocialLinks extends Record<string, Link> {}

type TranslationItem = {
  key: string;
  value: string;
};

type Translations = TranslationItem[];

interface FrontmatterBase {
  title: string;
  headline?: string;
  cover?: Image;

  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;

  noindex?: boolean;
  nofollow?: boolean;

  draft?: boolean;
  sortOrder?: number;
}

interface BaseObject extends FrontmatterBase {
  html: string;

  slug: string;
  to: string;
  locale: string;
}

interface FrontmatterPost extends FrontmatterBase {
  datePublished?: Date;
  dateModified?: Date;

  authors?: Author[];

  tags?: Link[];
  categories?: Link[];

  featured?: boolean;
}

interface Post extends FrontmatterPost, BaseObject {
  excerpt: string;
  readingTime: number;
}

interface FrontmatterPage extends FrontmatterBase {}
interface Page extends FrontmatterPage, BaseObject {}
