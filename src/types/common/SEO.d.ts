type SeoImage = {
  src: string;
  height: number;
  width: number;
  alt?: string;
};

type SeoLink = {
  rel: string;
  href: string;
  type: string;
  hrefLang: string;
};

type SeoMeta = {
  name: string;
  property: string;
  content: string;
  httpEquiv: string;
};

type SeoConfig = {
  organization: {
    siteBusinessPhoto?: string[];
    siteLogo: string;
  };
  facebook?: {
    image?: SeoImage;
    fbAppID?: string;
  };
  twitter?: {
    card?: string;
    image?: SeoImage;
    site?: string;
    creator?: string;
  };
  googleAnalyticsID?: string;
};

type PostSeo = Omit<IFrontmatterPost, 'excerpt' | 'readingTime' | 'html' | 'featured' | 'authors'> & {
  authors?: Array<Author>;
};

type SEO = PostSeo & {
  contacts: Contacts;
  address: Address;
  socialLinks?: SocialLinks;

  canonical?: string;

  pageType: string;

  meta?: Partial<SeoMeta>[];
  link?: Partial<SeoLink>[];
};

type BaseSEO = Omit<SEO, 'cover'> &
  SeoConfig & {
    locale: string;
    pathname: string;

    siteUrl: string;
    siteLogo: string;

    i18n: I18n;
    imgUrl?: string;
    isArticle?: boolean;

    pageUrl: string;
    htmlLang: string;
  };

type PageSchemaParams = Omit<BaseSEO, 'contacts' | 'address' | 'organization' | 'locale' | 'pathname' | 'i18n'> & {
  organizationName: string;
  publisher?: string;
};
