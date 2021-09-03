import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return (
    <Box m="auto" maxWidth={500} fontFamily="sans-serif">
      <title>
        {pageTitle} | {siteMetadata.title}
      </title>
      <Box
        as="header"
        fontSize="3rem"
        color="gray"
        fontWeight={700}
        margin="3rem 0"
      >
        {siteMetadata.title}
      </Box>
      <nav>
        <Flex as="ul" listStyleType="none" pl={0}>
          <Box as="li" pr="2rem">
            <Box as={Link} to="/" color="black">
              Home
            </Box>
          </Box>
          <Box as="li" pr="2rem">
            <Box as={Link} to="/about" color="black">
              About
            </Box>
          </Box>
          <Box as="li" pr="2rem">
            <Box as={Link} to="/blog" color="black">
              Blog
            </Box>
          </Box>
        </Flex>
      </nav>
      <main>
        <Box as="h1" color="rebeccapurple">
          {pageTitle}
        </Box>
        {children}
      </main>
    </Box>
  );
};

export default Layout;
