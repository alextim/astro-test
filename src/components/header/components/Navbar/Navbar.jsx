import React, { useState } from 'react';

import i18n from '@/config/i18n';
import { localizePath } from '@/lib/i18n-utils';
import { useLocale, useContacts, useMainNav } from '../../../ComponentContext/ComponentContext';
import BODY_PREVENT_SCROLLING from './body-prevent-scrolling';

import Hamburger from '../Hamburger';
import Logo from '../Logo';
import { Left, Right } from '../LeftRight';
import Menu from '../Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNav = useMainNav();
  const address = useContacts();
  const locale = useLocale();

  const phone = String(address?.phones[0]);

  const { siteTitle, siteShortName } = i18n.locales[locale];

  const setIsMenuOpenWrap = (value) => {
    const list = document.body.classList;
    const hasClass = list.contains(BODY_PREVENT_SCROLLING);
    if (value) {
      if (!hasClass) {
        list.add(BODY_PREVENT_SCROLLING);
      }
    } else if (hasClass) {
      list.remove(BODY_PREVENT_SCROLLING);
    }
    setIsMenuOpen(value);
  };

  const toggleOpen = () => setIsMenuOpenWrap(!isMenuOpen);
  const close = () => setIsMenuOpenWrap(false);

  const localizedRoot = localizePath('/', locale);
  //    <Menu menuData={menuData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpenWrap} />
  return (
    <React.Fragment>
      <Left>
        <Logo to={localizedRoot} phone={phone} siteTitle={siteTitle} siteShortName={siteShortName} onClick={close} />
      </Left>
      <Menu navItems={mainNav} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpenWrap} />
      <Right>
        <Hamburger open={isMenuOpen} onClick={toggleOpen} />
      </Right>
    </React.Fragment>
  );
};

export default Navbar;
