import i18n from '@/config/i18n';
import { localizePath, getPurePathname } from '@/lib/i18n-utils';
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
          <div key={code} className="after:mx-2 after:content-['|'] last:after:m-0 last:after:content-empty">
            <a
              className={`uppercase text-gray-900 hover:no-underline hover:outline-none focus:no-underline focus:outline-none active:no-underline active:outline-none hover:text-blue-600${
                isCurrentPage ? 'text-blue-800' : ''
              }`}
              href={isCurrentPage ? pathname : localizePath(getPurePathname(pathname), code)}
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
