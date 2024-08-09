import React, { useState } from 'react';
import config from '../../../config';
import TreeNode from './treeNode';

const calculateTreeData = (edges) => {
  const originalData = config.sidebar.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== '/'
      )
    : edges;

  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title },
          frontmatter: { index },
        },
      }
    ) => {
      const parts = slug.split('/');

      let { items: prevItems } = accu;

      const slicedParts =
        config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const slicedLength =
        config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

      const existingItem = prevItems.find(({ label }) => label === parts[slicedLength]);

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
          index,
        });
      }
      return accu;
    },
    { items: [] }
  );

  const {
    sidebar: { forcedNavOrder = [] },
  } = config;

  const tmp = [...forcedNavOrder];

  if (config.gatsby && config.gatsby.trailingSlash) {
  }
  tmp.reverse();

  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');

    let { items: prevItems } = accu;

    const slicedParts =
      config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find((item) => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    }

    // sort items alphabetically.
    prevItems.map((item) => {
      item.items = item.items.sort(function (a, b) {
        if (a.index < b.index) return -1;
        if (a.index > b.index) return 1;
        return 0;
      });
    });
    const slicedLength =
      config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

    const index = prevItems.findIndex(({ label }) => label === parts[slicedLength]);

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }
    return accu;
  }, tree);
};

const Tree = ({ edges }) => {
  let [treeData] = useState(() => {
    return calculateTreeData(edges);
  });

  const defaultCollapsed = {};

  treeData.items.forEach((item) => {
    if (config.sidebar.collapsedNav && config.sidebar.collapsedNav.includes(`/blog${item.url}`)) {
      defaultCollapsed['/blog' + item.url] = true;
    } else {
      defaultCollapsed['/blog' + item.url] = false;
    }
  });
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  // Recursive function to add the /blog prefix to all URLs
  const addBlogPrefix = (data) => {
    if (data.items) {
      data.items = data.items.map((item) => {
        // Exclude contact and about-me pages from prefixing
        if (item.url !== '/' && item.url !== '/contact' && item.url !== '/about-me') {
          return {
            ...item,
            url: `/blog${item.url}`,
          };
        } else {
          return item;
        }
      });
      // Filter out contact and about-me pages from sub-items
      data.items = data.items.filter((item) => item.url !== '/contact' && item.url !== '/about-me');
      data.items.forEach(addBlogPrefix); // Recursively call for sub-items
    }
    return data;
  };

  const sortNestedItems = (data) => {
    if (data.items) {
      // Sort the immediate children based on index if present
      data.items.sort((a, b) => {
        if (a.index !== null && b.index !== null) {
          return a.index - b.index;
        } else if (a.index !== null) {
          return -1; // Items with index come first
        } else if (b.index !== null) {
          return 1; // Items without index come last
        } else {
          return 0; // Default sorting if no index
        }
      });

      // Recursively sort nested items
      data.items.forEach(sortNestedItems);
    }
    return data;
  };

  // // Apply the prefix to the entire treeData structure
  const prefixedTreeData = addBlogPrefix({ ...treeData });
  const sortedData = sortNestedItems(prefixedTreeData);

  return (
    <TreeNode
      className={`${config.sidebar.frontLine ? 'showFrontLine' : 'hideFrontLine'} firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      {...sortedData}
    />
  );
};

export default Tree;
