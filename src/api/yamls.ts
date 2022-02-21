import getYaml from './utils/getYaml';

export function fetchContacts(): Contacts {
  return getYaml('content/data/contacts.yaml');
}

export function fetchMainNav(locale: string): MainNav {
  return getYaml(`content/data/locales/main-nav/main-nav.${locale}.yaml`);
}

export function fetchFooterNav(locale: string): FooterNav {
  return getYaml(`content/data/locales/footer-nav/footer-nav.${locale}.yaml`);
}

export function fetchSocialLinks(locale: string): SocialLinks {
  return getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
}

export function fetchTranslations(locale: string): Translations {
  return getYaml(`content/data/locales/translations/translations.${locale}.yaml`);
}

export function fetchAddress(locale: string): Address {
  return getYaml(`content/data/locales/address/address.${locale}.yaml`);
}

export function fetchAuthors(locale: string): Array<Author> {
  return getYaml(`content/blog/authors/authors.${locale}.yaml`);
}
