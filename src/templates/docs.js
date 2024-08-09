import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { Layout, Link } from '$components';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';
import {
  Edit,
  StyledHeading,
  StyledSubHeading,
  StyledMainWrapper,
} from '../components/styles/Docs';

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return this.props.children;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
        // if docsLocation is not provided, we set a default location
        // siteMetadata: { docsLocation: defaultDocsLocation = 'docs', title: defaultTitle = 'Docs' },
      },
    } = data;

    const githubIcon = require('../components/images/github.svg').default;

    // Recursive sorting function
    const sortNestedItems = (items) => {
      items.sort((a, b) => {
        // Sort only when index is not null and nested elements belong to same parent
        if (a.node.frontmatter?.index !== null && b.node.frontmatter?.index !== null) {
          // Compare indices, taking into account decimal points
          const aIndexParts = a.node.frontmatter?.index.toString().split('.');
          const bIndexParts = b.node.frontmatter?.index.toString().split('.');

          // Compare the integer parts first
          if (aIndexParts && bIndexParts && parseInt(aIndexParts[0]) !== parseInt(bIndexParts[0])) {
            return parseInt(aIndexParts[0]) - parseInt(bIndexParts[0]);
          }

          // If integer parts are equal, compare decimal parts
          if (aIndexParts && bIndexParts && aIndexParts.length > 1 && bIndexParts.length > 1) {
            return parseFloat(a.node.frontmatter.index) - parseFloat(b.node.frontmatter.index);
          }

          // If one has a decimal part and the other doesn't, the one with the decimal part comes later
          if (aIndexParts && aIndexParts.length > 1) {
            return 1;
          } else if (bIndexParts && bIndexParts.length > 1) {
            return -1;
          }
        }
        return 0;
      });

      // Recursively sort nested items
      items.forEach((item) => {
        if (item.node.fields.slug.split('/').length > 2) {
          sortNestedItems(
            item.node.fields.slug
              .split('/')
              .slice(1)
              .reduce((acc, cur) => {
                const existingItem = acc.find((item) => item.node.fields.slug === cur);
                if (existingItem) {
                  return acc;
                } else {
                  return [...acc, { node: { fields: { slug: cur } } }];
                }
              }, [])
          );
        }
      });
    };

    // Sort the edges array using the recursive sorting function
    sortNestedItems(allMdx.edges);

    const navItems = allMdx.edges
      // .sort((a, b) => {
      //   // Sort only when index is not null and nested elements belong to same parent
      //   if (a.node.frontmatter.index !== null && b.node.frontmatter.index !== null) {
      //     if (a.node.fields.slug.split('/')[1] === b.node.fields.slug.split('/')[1]) {
      //       return a.node.frontmatter.index - b.node.frontmatter.index;
      //     }
      //   }
      //   return 0;
      // })
      .map(({ node }) => node.fields.slug)
      .filter((slug) => slug !== '/')
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find((url) => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find((url) => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map((slug) => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      })
      .filter((predicate) => predicate.url !== '/contact' && predicate.url !== '/about-me');

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div className={'titleWrapper'}>
          <StyledHeading>{mdx.fields.title}</StyledHeading>
          <StyledSubHeading>{metaTitle}</StyledSubHeading>
          {/* <Edit className={'mobileView'}>
            {docsLocation && (
              <Link className={'gitBtn'} to={`${docsLocation}/${mdx.parent.relativePath}`}>
                <img src={githubIcon} alt={'Github logo'} /> Edit on GitHub
              </Link>
            )}
          </Edit> */}
        </div>
        <StyledMainWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </StyledMainWrapper>

        {mdx.fields.slug !== '/about-me' && mdx.fields.slug !== '/contact' && (
          <div className={'addPaddTopBottom'}>
            <NextPrevious mdx={mdx} nav={nav} />
          </div>
        )}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
          frontmatter {
            index
          }
        }
      }
    }
  }
`;
