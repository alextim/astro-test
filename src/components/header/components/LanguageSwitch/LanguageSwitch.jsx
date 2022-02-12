import i18n from '../../../../config/i18n';
import { localizePath, pureSlug } from '../../../../lib/i18n-utils';
import { useLocale, usePathname } from '../../../ComponentContext';

const LanguageSwitch = ({ onClick }) => {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <div className="inline-flex items-center justify-center">
      {Object.keys(i18n.locales).map((code) => {
        const { shortName } = i18n.locales[code];
        const isCurrentPage = locale === code;
        return (
          <div key={code} className="after:content-['|'] after:mx-2 last:after:content-empty last:after:m-0">
            <a
              className={`text-gray-900 uppercase active:outline-none active:no-underline focus:outline-none focus:no-underline hover:outline-none hover:no-underline hover:text-blue-600${isCurrentPage ? 'text-blue-800' : ''
                }`}
              href={isCurrentPage ? pathname : localizePath(pureSlug(pathname), code)}
              onClick={onClick}
            >
              {shortName}
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default LanguageSwitch;
