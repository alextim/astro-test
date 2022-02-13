export const prevLink = (page, slug) => `${slug}${page - 1 === 1 ? '' : `${page - 1}/`}`;

export const nextLink = (page, slug) => `${slug}${page + 1}/`;

export const currentLink = (page, slug) => `${slug}${page === 1 ? '' : `${page}/`}`;
