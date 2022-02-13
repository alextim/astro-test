import format from '../../../../lib/formatDate';
import i18n from '../../../../config/i18n.js';

const formatDate = (date, locale) => format(date, locale || i18n.defaultLocale, 'MMM D, YYYY');

export default formatDate;
