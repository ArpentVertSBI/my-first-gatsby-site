import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout pageTitle="About page">
            <Link to="/">Back to home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    );
};

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="About me page" />
    </>
);



export default AboutPage;
