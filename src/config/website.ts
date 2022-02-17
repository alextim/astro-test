const config: Record<string, any> = {
  siteLogo: `assets/images/logo.svg`,
  recentPostsLimit: 5,
  pageSize: 1,
  readMore: 'post.readMore',
  pruneLength: 160,
  blogPath: 'blog',
} as const;

export default config;
