import { localizePath } from '../../lib/i18n-utils';
import { useLocale } from '../ComponentContext';

const LocalizedLink = ({ to, children, ...rest }) => {
  const locale = useLocale();
  const path = localizePath(to, locale);

  return (
    <a href={path} {...rest}>
      {children}
    </a>
  );
};

export default LocalizedLink;
