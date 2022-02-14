import utils from '@alextim/utils';

const SITE_LOGO = '/assets/images/logo.svg';

const Logo = ({ to, phone, siteTitle, siteShortName, onClick }) => (
  <div className="inline-flex h-full items-center xl:mr-12">
    <a
      className="mr-4 inline-flex items-center text-gray-800 hover:no-underline focus:no-underline active:no-underline"
      href={to}
      onClick={onClick}
    >
      <img src={SITE_LOGO} alt={siteTitle} height="48" width="48" className="h-12 w-12 xl:h-14 xl:w-14" />
    </a>
    <div className="flex flex-col text-left">
      <a href={to} onClick={onClick} className="bold text-lg text-gray-800 hover:no-underline focus:no-underline active:no-underline">
        {siteShortName}
      </a>
      <a href={utils.phoneUrl(phone)}>{utils.formatPhone(phone)}</a>
    </div>
  </div>
);

export default Logo;
