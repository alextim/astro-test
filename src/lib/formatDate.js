import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import 'dayjs/locale/uk';

const formatDate = (d, locale, format) => {
  if (!d) {
    return d;
  }
  return dayjs(d).locale(locale).format(format);
};

export default formatDate;
