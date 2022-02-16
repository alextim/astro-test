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
