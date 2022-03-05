const getImagePath = (path: string): string => {
  if (!path) {
    throw new Error('getImagePath: path is required');
  }
  return `src/${path}`;
};

export default getImagePath;
