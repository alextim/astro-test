import config from './website';

const seoConfig: Record<string, any> = {
  organization: {
    /**
     * Schema org
     *
     * folder: /static/assets
     *  */
    siteBusinessPhoto: [
      `${config.siteUrl}/assets/images/organization/1x1/business-photo.jpg`,
      `${config.siteUrl}/assets/images/organization/4x3/business-photo.jpg`,
      `${config.siteUrl}/assets/images/organization/16x9/business-photo.jpg`,
    ],
  },

  facebook: {
    /**
     * Open Graph Image
     *
     * meta property="og:image
     * one image per locale
     *
     * Sample file name: banner-ru.jpg
     *
     * folder: /static/assets/images
     * */
    image: {
      src: `${config.siteUrl}/assets/images/og/banner-`,
      width: 1200,
      height: 630,
    } as SeoImage,

    /**
     * In order to use Facebook Insights you must add the app ID to your page.
     * Insights lets you view analytics for traffic to your site from Facebook.
     *
     * meta property="fb:app_id
     */
    fbAppID: '',
  },

  twitter: {
    card: 'summary_large_image',
    /**
     * Twitter Image
     *
     * meta name="twitter:image
     * one image per locale
     *
     * Sample file name: banner-ru.jpg
     *
     * folder: /static/assets/images
     *  */
    image: {
      src: `${config.siteUrl}/assets/images/twitter/2x1/banner-`,
      width: 600,
      height: 300,
    } as SeoImage,
    /**
     * Twitter URL
     *
     * meta name="twitter:site"
     *  * */
    site: '',
    /**
     * Twitter Id
     *
     * meta name="twitter:creator"
     *  */
    creator: '',
  },

  googleAnalyticsID: 'UA-24264154-1',
} as const;

export default seoConfig;
