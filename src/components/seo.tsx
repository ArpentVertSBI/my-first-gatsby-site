import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FunctionComponent } from "react";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from "./layout.module.css";

type SeoProps = {
    pageTitle: string;
};

const Seo: FunctionComponent<SeoProps> = (props: SeoProps) => {
    const { pageTitle } = props;

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const { title } = data.site.siteMetadata;

    return (
        <title>
            {pageTitle} | {title}
        </title>
    );
};
export default Seo;
