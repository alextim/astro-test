import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import uk from 'dayjs/locale/uk';

const formatDate = (d, locale, format) => {
  if (!d) {
    return d;
  }
  if (locale === 'uk') {
    dayjs.locale(uk);
  } else if (locale === 'ru') {
    dayjs.locale(ru);
  }
  if (!dayjs(d, 'YYYY-MM-DD', locale, true).isValid()) {
    return d;
  }
  return dayjs(d).format(format);
};

export default formatDate;
