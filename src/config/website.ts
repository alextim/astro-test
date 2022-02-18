const siteUrl = 'https://s-bars.com.ua';

const config: Record<string, any> = {
  siteUrl,
  siteLogo: `${siteUrl}/assets/images/logo.svg`,

  /**
   * webmanifest
   *  */
  // meta name="theme-color"
  themeColor: '#3498DB',
  backgroundColor: '#2e3246',

  /**
   *  Blog
   *
   */
  blogPath: 'blog',
  // Blog index page size
  pageSize: 1,
  //  Excerpt length
  pruneLength: 160,
  // Translation key for 'Read more...' text in post cards
  readMore: 'post.readMore',
  // Widget Recent Posts
  recentPostsLimit: 5,
} as const;

export default config;
