/*
import dotenv from 'dotenv';
import _fetchAPI from './fetchAPI';


dotenv.config();
const API_URL = process.env.WP_URL;

const fetchAPI = (query, { variables } = {}) => _fetchAPI(API_URL, query, variables);
*/
import getYaml from './getYaml';

export function fetchContacts() {
  return getYaml('content/data/contacts.yaml');
}

export function fetchMainNav(locale) {
  return getYaml(`content/data/locales/main-nav/main-nav.${locale}.yaml`);
}

export function fetchFooterNav(locale) {
  return getYaml(`content/data/locales/footer-nav/footer-nav.${locale}.yaml`);
}

export function fetchSocialLinks(locale) {
  return getYaml(`content/data/locales/social-links/social-links.${locale}.yaml`);
}

export function fetchTranslations(locale) {
  return getYaml(`content/data/locales/translations/translations.${locale}.yaml`);
}

export function fetchAddress(locale) {
  return getYaml(`content/data/locales/address/address.${locale}.yaml`);
}
