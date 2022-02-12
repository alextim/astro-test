import { graphql } from 'gatsby';

import PostList from './components/PostList';

const PostListTemplate = ({ data, location: { pathname }, pageContext }) => (
  <PostList data={data} pathname={pathname} pageContext={pageContext} />
);

export default PostListTemplate;

export const postListTemplateQuery = graphql`
  query PostListQuery($locale: String!, $skip: Int!, $limit: Int!, $type: String!) {
    #
    # blogPath
    # regex: "//blog//"
    #
    page: mdPage(slug: { regex: "//blog//" }, locale: { eq: $locale }) {
      ...MdPageFragment
    }
    posts: allMdPost(
      sort: { fields: [featured, datePublished], order: [ASC, DESC] }
      limit: $limit
      skip: $skip
      filter: { locale: { eq: $locale }, type: { eq: $type } }
    ) {
      edges {
        node {
          ...MdPostCardFragment
        }
      }
    }
    address: address(locale: { eq: $locale }) {
      ...AddressFragment
    }
    mainNav: allMainNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
          submenu {
            title
            to
          }
        }
      }
    }
    footerNav: allFooterNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
        }
      }
    }
    socialLinks: allSocialLink(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          code
          to
          title
        }
      }
    }
    translations: allTranslation(filter: { locale: { eq: $locale } }, limit: 1000) {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`;
