import Link from '../LocalizedLink';

const Button = ({
  to = '',
  target = '',
  overrideCSS = '',
  icon = '',
  children,
  as = 'button',
  secondary = false,
  variant = '',
  ...rest
}) => {
  let styles = `
  shrink-0
  inline-flex items-center
  px-3
  h-14
  w-fit
  border border-solid rounded
  cursor-pointer

  font-semibold
  text-base
  no-underline
  whitespace-nowrap
  tracking-wider
  uppercase

  bg-[length:3.75rem_3.75rem]
  transition

  text-gray-900
  bg-blue-300
  border-blue-500

  hover:bg-blue-500 focus:bg-blue-500
  hover:border-blue-900 focus:border-blue-900

  active:no-underline active:outline-none

  focus:no-underline focus:outline-none

  hover:no-underline hover:outline-none

  focus:shadow
  `;
  if (secondary) {
    styles += ' ' + buttonStyles.secondary;
  }
  if (variant && buttons[variant]) {
    styles += ' ' + buttons[variant];
  }
  if (overrideCSS) {
    styles += ' ' + overrideCSS;
  }

  if (as === 'link') {
    return (
      <Link className={styles} to={to} {...rest}>
        {children}
        {icon}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a className={styles} href={to} target={target} {...rest}>
        {children}
        {icon}
      </a>
    );
  }

  if (as === 'button') {
    return (
      <button className={styles} {...rest}>
        {children}
        {icon}
      </button>
    );
  }

  return null;
};

export default Button;
