import { useState } from 'react';

import MenuItem from './MenuItem';

// const styleMenuItemExtra = 'xl:after:inline-block xl:after:content-empty xl:after:border-solid xl:after:border-gray-900 xl:after:border-t-0 xl:after:border-r xl:after:border-b xl:after:border-l-0 xl:after:p-0.5 xl:after:ml-2 xl:after:rotate-45';

const SubMenu = ({ title, to, items, path, onClick }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const onMouseEnter = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  const onClickWrap = (e, href) => {
    if (!href) {
      e.preventDefault();
    }
    toggleVisible();
    onClick(e);
  };

  return (
    <li className="xl:flex xl:items-center xl:relative xl:h-full" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="inline-flex items-center w-full relative xl:h-full">
        <MenuItem isActive={path === to} to={to} extraStyle="menu-item-extra" onClick={(e) => onClickWrap(e, to)}>
          {title}
        </MenuItem>
        <div
          type="button"
          className={
            `absolute w-16 h-full right-0 cursor-pointer 
        after:inline-block
        after:absolute
        after:top-0
        after:bottom-0
        after:right-0
        after:left-0
        after:m-auto
        after:h-2
        after:w-2
        after:content-empty
        after:border-solid
        after:border-gray-900
        after:border-t-0
        after:border-r
        after:border-b
        after:border-l-0
        xl:hidden ` + (visible ? 'after:rotate-225' : 'after:rotate-45')
          }
          onTouchStart={toggleVisible}
        />
      </div>
      {/* '2px 2px 15px 0 rgba(0,0,0,.8)' */}
      <ul
        className={
          visible
            ? 'flex flex-col list-none p-0 m-0 bg-slate-50 xl:absolute xl:top-18 xl:bg-white xl:left-0 xl:shadow-sm xl:z-50'
            : 'hidden'
        }
      >
        {items.map((item) => (
          <li key={item.to} className="m-0">
            <MenuItem isActive={path === item.to} to={item.to} onClick={(e) => onClickWrap(e, item.to)}>
              {item.title}
            </MenuItem>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenu;
