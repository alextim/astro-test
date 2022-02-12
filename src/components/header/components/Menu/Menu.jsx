import { usePathname } from '../../../ComponentContext';
import LanguageSwitch from '../LanguageSwitch';
import CTAButton from './CTAButton';

import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const styleWrapDefault = `
  flex-1
  min-w-[50%]

  flex
  flex-col
  bg-white

  absolute
  top-14
  h-main-menu

  overflow-y-scroll

  transition-transform duration-500 ease-linear
  will-change-transform

  w-full
  m-auto
  left-0
  z-40

  xl:inline-flex
  xl:flex-row
  xl:items-center
  xl:justify-between

  xl:static
  xl:top-0
  xl:h-full

  xl:overflow-visible

  xl:!transition-none
  xl:!will-change-[unset]

  xl:!pointer-events-auto
  xl:!visible
  xl:!transform-none
`;

const Menu = ({ navItems, isMenuOpen, setIsMenuOpen }) => {
  const pathname = usePathname();
  const onClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const styleWrap =
    (isMenuOpen ? 'pointer-events-auto visible transform-none' : 'pointer-events-none invisible -translate-x-[110%]') + styleWrapDefault;
  return (
    <div className={styleWrap}>
      <ul className="flex flex-col m-0 p-0 list-none xl:inline-flex xl:flex-row xl:items-center xl:h-full">
        {navItems.map(({ title, to, submenu }, i) => {
          if (submenu) {
            return <SubMenu key={i} to={to} title={title} items={submenu} path={pathname} onClick={onClick} />;
          }
          return (
            <li key={i} className="m-0 xl:inline-flex xl:items-center xl:h-full">
              <MenuItem to={to} isActive={to === pathname} onClick={onClick}>
                {title}
              </MenuItem>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col justify-center py-4 xl:inline-flex xl:flex-row xl:items-center">
        <CTAButton onClick={onClick} />
        <LanguageSwitch onClick={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
};

export default Menu;
