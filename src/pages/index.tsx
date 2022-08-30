import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Fans at an AC/DC concert in 1985</p>
            <StaticImage
                alt="Fans at an AC/DC concert in 1985"
                src="../images/ACDC1985.webp"
            />
        </Layout>
    );
};

export const Head = () => <Seo pageTitle="Home Page" />

export default IndexPage;
