import getSlugFromFilePathname from './getSlugFromFilePathname';

const getValidatedSlug = (pathname: string | undefined): string => {
  if (!pathname) {
    throw new Error('pathname is required');
  }
  const slug = getSlugFromFilePathname(pathname);
  if (!slug) {
    throw new Error(`Wrong pathname ${pathname} in content`);
  }
  return slug;
};

export default getValidatedSlug;
