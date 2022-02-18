interface Locale extends Record<string, string> {
  htmlLang: string;
  formatLocale: string;
  ogLocale: string;
  name: string;
  shortName: string;
  localName: string;
  shortLocalName: string;

  dateFormat: string;

  siteTitle: string;
  siteDescription: string;
  siteShortName: string;
}

interface I18n extends Record<string, string | Record<string, Locale>> {
  locales: Record<string, Locale>;
  defaultLocale: string;
}
