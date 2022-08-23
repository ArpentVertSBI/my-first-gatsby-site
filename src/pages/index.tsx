import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Fans at an AC/DC concert in 1985"
                src="../images/ACDC1985.webp"
            />
        </Layout>
    );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
