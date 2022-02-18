import { getPurePathname, getLocaleFromPathname, localizePath } from '@/lib/i18n-utils';

const isRoot = (pathname: string): boolean => pathname === '/';

const getAllAscendantsPathnames = (pathname: string): string[] => {
  const result = ['/'];
  pathname
    .split('/')
    .slice(1, -2)
    .forEach((el) => {
      result.push(`${result[result.length - 1]}${el}/`);
    });
  return result;
};

const getDefaultTitle = (pathname: string): string => {
  if (isRoot(pathname)) {
    return 'Home';
  }
  const s = pathname.split('/').slice(1, -1).pop();
  if (!s) {
    throw new Error(`Wrong pathname ${pathname}`);
  }
  return s;
};

const getTitle = (pathname: string): string => {
  return '';
};

const getBreadcrumbs = (pathname: string): Array<Link> | null => {
  const purePathname = getPurePathname(pathname);
  if (isRoot(purePathname)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);

  const a = getAllAscendantsPathnames(purePathname);

  const result: Array<Link> = [];

  a.forEach((el) => {
    const pathname = localizePath(el, locale);
    let title: string = getTitle(pathname);
    if (!title) {
      title = getDefaultTitle(pathname);
    }
    result.push({ to: pathname, title });
  });
  return result;
};

export default getBreadcrumbs;
