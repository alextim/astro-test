import i18n from '../config/i18n';

function getPaths() {
  return Object.keys(i18n.locales).filter((locale) => locale !== i18n.defaultLocale).map((locale) => ({ params: { locale }}))
}

export default getPaths;