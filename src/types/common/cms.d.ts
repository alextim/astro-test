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

interface IFrontmatterBase {
  title?: string;
  headline?: string;
  metaTitle?: string;
  metaDescription?: string;

  cover?: Image;

  noindex?: boolean;
  nofollow?: boolean;
  slug?: string;
}

interface IFrontmatterPost extends IFrontmatterBase {
  datePublished?: ISODate;
  dateModified?: ISODate;

  authors?: string[];
  featured?: boolean;
}

interface IFrontmatterPage extends IFrontmatterBase {
}

interface IAstro {
  url: any,
  content: any,
  Content: any,
  astro: {
    html: string;
  };
  file: {
    pathname: string;
  };
  // content: any;
  // Content: any;
  // url: any;
}

type AstroPost = IAstro & IFrontmatterPost;
type AstroPage = IAstro & IFrontmatterPage;

interface IPageAndPostCommon {
  //TODO:
  html: string;

  slug: string;
  to: string;
  locale: string;
}

type Post =  Omit<IFrontmatterPost, 'authors' | 'slug'> &  IPageAndPostCommon & {
  authors?: Array<Author>;

  excerpt: string;
  readingTime: number;
}

type Page =  Omit<IFrontmatterPage, 'slug'> &  IPageAndPostCommon & {
}
