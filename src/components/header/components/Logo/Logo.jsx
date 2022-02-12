import utils from '@alextim/utils';

const SITE_LOGO = '/assets/images/logo.svg';

const Logo = ({ to, phone, siteTitle, siteShortName, onClick }) => (
  <div className="inline-flex items-center h-full xl:mr-12">
    <a className="inline-flex items-center mr-4 text-gray-800 hover:no-underline active:no-underline focus:no-underline" href={to} onClick={onClick}>
      <img src={SITE_LOGO} alt={siteTitle} height="48" width="48" className="w-12 h-12 xl:w-14 xl:h-14" />
    </a>
    <div className="flex flex-col text-left">
      <a href={to} onClick={onClick} className="bold text-lg text-gray-800 hover:no-underline active:no-underline focus:no-underline">
        {siteShortName}
      </a>
      <a href={utils.phoneUrl(phone)}>{utils.formatPhone(phone)}</a>
    </div>
  </div>
);


export default Logo;
