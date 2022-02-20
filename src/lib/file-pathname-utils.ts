export const getSlugFromFilePathname = (pathname: string): string => {
  const [name] = pathname.split('/').slice(-1);
  if (!name) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  const [fileName] = name.split('.');
  if (!fileName) {
    throw new Error(`Wrong pathname ${pathname}.`);
  }
  return fileName;
};


