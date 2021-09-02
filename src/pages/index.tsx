import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Black Lagoon Squad"
        placeholder="blurred"
        src="https://dafunda.com/wp-content/uploads/2017/03/Black_Lagoon_C-min-1024x570.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
