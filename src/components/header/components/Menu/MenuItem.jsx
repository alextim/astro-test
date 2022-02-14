// boxShadow: `0 -2px 0 ${colors.header.nav.item.boxShadowColor} inset`

const MenuItem = ({ children, to, isActive, onClick, extraStyle }) => (
  <a
    className={`at-menu-item at-menu-item-xl${extraStyle ? ' ' + extraStyle : ''} ${isActive ? ' shadow-inner' : ''}`}
    href={to}
    onClick={onClick}
  >
    {children}
  </a>
);

export default MenuItem;
