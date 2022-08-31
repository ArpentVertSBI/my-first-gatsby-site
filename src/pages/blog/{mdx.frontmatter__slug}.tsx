import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Mdx } from "../../Models/data/mdx";

type BlogPostProps = {
    data: Mdx;
    children: React.ReactElement;
};

export const BlogPost: React.FunctionComponent<BlogPostProps> = (props: BlogPostProps) => {
    const { data, children } = props;

    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image!} alt={data.mdx.frontmatter.hero_image_alt} />
            <p style={{ fontSize : '0.5em' }}>
            {"Photo Credit: "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
            {children}
            
        </Layout>
    );
};
export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
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
export const Head = () => <Seo pageTitle="Super Cool Blog Posts" />;

export default BlogPost;
