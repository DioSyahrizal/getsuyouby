import * as React from "react";
import { Link } from "gatsby";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <Box m="auto" maxWidth={500} fontFamily="sans-serif">
      <title>{pageTitle}</title>
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
