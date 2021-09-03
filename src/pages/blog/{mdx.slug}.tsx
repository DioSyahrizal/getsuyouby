import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "components/Layout";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: Date;
        hero_image_alt: string;
        hero_image_credit_link: string;
        hero_image_credit_text: string;
        hero_image: IGatsbyImageData;
      };
      body: string;
    };
  };
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image as IGatsbyImageData}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
