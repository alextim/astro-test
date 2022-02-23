const getValidatedSlugFromContent = (pathname: string): string => {
  if (!pathname) {
    throw new Error('pathname is required');
  }

  if (pathname === '/') {
    return '/';
  }

  const a = pathname.split('/');
  if (!pathname.endsWith('/')) {
    a.push('');
  }

  const [slug] = a.slice(-2, -1);
  if (!slug || slug.length === 0) {
    throw new Error(`No slug extracted from ${pathname}`);
  }

  return slug;
};

export default getValidatedSlugFromContent;

