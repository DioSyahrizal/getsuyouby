import React, { FC } from "react";
import { graphql, Link } from "gatsby";

import Layout from "components/Layout";

interface Props {
  data: {
    allMdx: {
      nodes: [
        {
          frontmatter: {
            date: Date;
            title: string;
          };
          id: string;
          slug: string;
        }
      ];
    };
  };
}

const BlogPage: FC<Props> = ({ data, ...rest }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        slug
        id
      }
    }
  }
`;

export default BlogPage;
