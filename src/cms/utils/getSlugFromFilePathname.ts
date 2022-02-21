import path from 'path';

const getSlugFromFilePathname = (pathname: string): string => {
  if (!pathname) {
    throw new Error('pathname is required');
  }
  const { name, ext } = path.parse(pathname);
  if (!name) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  if (ext.toLowerCase() !== '.md') {
    throw new Error(`Unsupported exension ${ext} in ${pathname}.`);
  }
  return name;
};

export default getSlugFromFilePathname;
